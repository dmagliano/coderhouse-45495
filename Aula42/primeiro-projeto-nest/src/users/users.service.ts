import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.first_name = createUserDto.first_name;
    newUser.last_name = createUserDto.last_name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    this.users.push(newUser);
    return 'new user created ' + createUserDto.first_name;
  }

  findAll(limit: number, offset: number) {
    if (limit && offset) return this.users.slice(offset, limit + offset);
    if (limit) return this.users.slice(0, limit);
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users[id];
    user.first_name = updateUserDto.first_name;
    user.last_name = updateUserDto.last_name;
    user.email = updateUserDto.email;
    this.users[id] = user;
    return 'user updated ' + user.first_name;
  }

  remove(id: number) {
    const user = this.users[id];
    this.users.splice(id, 1);
    return 'user deleted ' + user.first_name;
  }
}
