import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class User {
  @Expose()
  name: string;
  @Expose()
  email: string;
  password: string;

  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
