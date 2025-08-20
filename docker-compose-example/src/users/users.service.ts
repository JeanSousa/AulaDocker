import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id });
  }

  create(user: Partial<User>) {
    const newUser = this.usersRepo.create(user);
    return this.usersRepo.save(newUser);
  }

  async update(id: number, user: Partial<User>) {
    await this.usersRepo.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.usersRepo.remove(user);
  }
}