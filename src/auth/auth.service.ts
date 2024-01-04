import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const user = await this.userService.create(registerDto);
    return user;
  }

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.userService.findOneByEmailPassword(
      loginRequestDto.email,
      loginRequestDto.password,
    );

    const payload = { sub: user.email };
    const response: LoginResponseDto = {
      access_token: await this.jwtService.signAsync(payload),
    };

    return response;
  }
}
