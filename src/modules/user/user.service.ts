import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  findAll(): Promise<User[]> {
    return this.find();
  }

  async findUserByUsername(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  async createUser(user: User): Promise<User> {
    return this.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }
}
