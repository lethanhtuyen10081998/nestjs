import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn({ password, username }: { username: string; password: string }): Promise<any> {
    const user = await this.usersService.findUserByUsername(username);
    console.log({ user });
    return { aa: 'a' };
  }
}
