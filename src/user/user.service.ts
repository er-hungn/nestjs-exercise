import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
}
