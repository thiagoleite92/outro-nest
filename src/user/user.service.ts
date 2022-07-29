import { Injectable } from '@nestjs/common';
import { CreateUserDto, ListUserDto } from './dto';
import { IUserService } from './interface';

@Injectable()
export class UserService implements IUserService {
  async create(createUserDto: CreateUserDto): Promise<any> {
    throw new Error('Method not implemented.');
  }
  listOne(id: ListUserDto): Promise<any> {
    throw new Error('Method not implemented.');
  }
  listAll(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
