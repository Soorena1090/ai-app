import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { OpenAI } from 'openai';
import { CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PostResponseDto } from './dto/post-response.dto';
import { PaginatedPostsDto } from './dto/paginated-posts.dto';
import { UserResponseDto } from '../users/dto/user-response.dto';

interface AiGeneratedPost {
  title: string;
  content: string;
  tags: string[];
}

@Injectable()
export class PostsService {
  private openai: OpenAI;

  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async generatePost(userId: string, topic: string): Promise<PostResponseDto> {
    // Generate AI content
    let aiContent: AiGeneratedPost;
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `Generate a blog post about "${topic}". Return JSON with title (string), content (300-500 words string), and tags (array of 3-5 strings).`,
          },
        ],
      });
      aiContent = JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      throw new HttpException(
        'AI generation failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const newPost = new this.postModel({
      title: aiContent.title,
      content: aiContent.content,
      tags: aiContent.tags,
      author: userId,
    });
    const savedPost = await newPost.save();

    // Invalidate cache
    await this.cacheManager.del('posts:all');

    const { author, ...postData } = savedPost.toObject();
    return {
      ...postData,
      author: {
        _id: userId,
        username: (
          await this.postModel
            .findById(savedPost._id)
            .populate('author', 'username')
        ).author.username,
      },
    };
  }

  async findAll(page: number, limit: number): Promise<PaginatedPostsDto> {
    const cacheKey = `posts:all:${page}:${limit}`;
    let cachedPosts = await this.cacheManager.get<PaginatedPostsDto>(cacheKey);
    if (cachedPosts) {
      return cachedPosts;
    }

    const posts = await this.postModel
      .find()
      .populate('author', 'username')
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.postModel.countDocuments();
    const result: PaginatedPostsDto = {
      data: posts.map((post) => {
        const { author, ...postData } = post.toObject();
        return {
          ...postData,
          author: { _id: author._id, username: author.username },
        };
      }),
      total,
      page,
      limit,
    };

    await this.cacheManager.set(cacheKey, result, { ttl: 3600 });
    return result;
  }

  async findOne(id: string): Promise<PostResponseDto> {
    const cacheKey = `post:${id}`;
    let cachedPost = await this.cacheManager.get<PostResponseDto>(cacheKey);
    if (cachedPost) {
      return cachedPost;
    }

    const post = await this.postModel
      .findById(id)
      .populate('author', 'username');
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    const { author, ...postData } = post.toObject();
    const result: PostResponseDto = {
      ...postData,
      author: { _id: author._id, username: author.username },
    };

    await this.cacheManager.set(cacheKey, result, { ttl: 3600 });
    return result;
  }
}
