import { Injectable } from '@nestjs/common';
import { CreateUserDto, ListUserDto } from './dto';
import { IUserService } from './interface';

let id = 1;
@Injectable()
export class UserService implements IUserService {
  private users: Array<any>;
  constructor() {
    this.users = [];
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    this.users.push({ ...createUserDto, id });

    id += 1;

    return {
      message: 'Usuario criado com sucesso',
      user: { ...createUserDto },
    };
  }

  listOne(id: ListUserDto): Promise<any> {
    const user = this.users.find((user) => user.id === +id);
    return user;
  }

  listAll(): any {
    return this.users;
  }

  findAndUpdate(id: number, update: any): Promise<any> {
    const user = this.users.find((user) => user.id === +id);

    user.name = update.name;

    console.log(user, 'aqui');

    return user;
  }

  remove(id: number): any {
    const newList = this.users.slice();

    const position = newList.findIndex((user) => user.id === id);

    newList.splice(position, 1);

    this.users = newList;

    return newList;
  }
}
