import { IsString, IsMongoId } from 'class-validator';

export class UserResponseDto {
  @IsMongoId()
  _id: string;

  @IsString()
  username: string;
}