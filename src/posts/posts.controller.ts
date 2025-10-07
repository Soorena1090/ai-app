import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  UseGuards,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostResponseDto } from './dto/post-response.dto';
import { PaginatedPostsDto } from './dto/paginated-posts.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: { userId: string; username: string };
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('generate')
  async generatePost(
    @Request() req: RequestWithUser,
    @Body() createPostDto: CreatePostDto,
  ): Promise<{ statusCode: number; data: PostResponseDto }> {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.postsService.generatePost(
        req.user.userId,
        createPostDto.topic,
      ),
    };
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ statusCode: number; data: PaginatedPostsDto }> {
    return {
      statusCode: HttpStatus.OK,
      data: await this.postsService.findAll(page, limit),
    };
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; data: PostResponseDto }> {
    return {
      statusCode: HttpStatus.OK,
      data: await this.postsService.findOne(id),
    };
  }
}
