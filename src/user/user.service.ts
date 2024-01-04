import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async create(user: User) {
    const emailExists = this.users.find((u) => u.email === user.email);

    if (emailExists) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    user.password = await bcrypt.hash(user.password, 10);
    const newUser = new User(user);
    this.users.push(newUser);
    return newUser;
  }

  async findOneByEmailPassword(email: string, password: string) {
    const user: User = this.users.find((u) => u.email === email);
    if (!user) {
      throw new HttpException('Email not found', HttpStatus.BAD_REQUEST);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
