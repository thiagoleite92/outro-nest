import { CreateUserDto, ListUserDto } from './../dto/';

export interface IUserService {
  create(createUserDto: CreateUserDto): Promise<any>;
  listOne(id: ListUserDto): Promise<any>;
  listAll(): Promise<any>;
  // delete(id): string;
  // update(id, updateUserDto): string;
}
