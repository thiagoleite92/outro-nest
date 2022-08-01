import { UserType } from '../types/user.type';
import { CreateUserDto } from './../dto/';

export interface IUserController {
  create(createUserDto: CreateUserDto): Promise<any>;
  listOne(id: number): Promise<UserType>;
  listAll(): Promise<Array<UserType>>;
  remove(id: number): Promise<void>;
  // update(id, updateUserDto): string;
}
