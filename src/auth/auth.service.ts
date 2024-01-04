import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const user = await this.userService.create(registerDto);
    return user;
  }
}
