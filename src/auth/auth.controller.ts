import { Controller, Post, Body, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UserResponseDto } from '../users/dto/user-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ statusCode: number; data: UserResponseDto }> {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.authService.register(
        createUserDto.username,
        createUserDto.password,
      ),
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<{ statusCode: number; data: { access_token: string } }> {
    const user = await this.authService.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
    return {
      statusCode: HttpStatus.OK,
      data: await this.authService.login(user),
    };
  }
}
