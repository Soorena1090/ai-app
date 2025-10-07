import { IsArray, IsNumber } from 'class-validator';
import { PostResponseDto } from './post-response.dto';

export class PaginatedPostsDto {
  @IsArray()
  data: PostResponseDto[];

  @IsNumber()
  total: number;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
