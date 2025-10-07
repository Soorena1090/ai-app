import { IsString, IsMongoId, IsArray } from 'class-validator';
import { UserResponseDto } from '../../users/dto/user-response.dto';

export class PostResponseDto {
  @IsMongoId()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsArray()
  tags: string[];

  author: UserResponseDto;
}