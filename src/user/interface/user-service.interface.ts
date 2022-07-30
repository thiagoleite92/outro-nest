import { User } from '../entity/user.entity';
import { CreateUserDto, ListUserDto } from './../dto/';

export interface IUserService {
  create(
    createUserDto: CreateUserDto,
  ): Promise<{ message: 'Usuário atualizado com sucesso' }>;
  listOne(id: ListUserDto): Promise<User>;
  listAll(): Promise<[User] | []>;
  findAndUpdate(
    id: number,
    updateUserDto: any,
  ): Promise<{ message: 'Usuário atualizado com sucesso!' }>;
  remove(id: ListUserDto): Promise<void>;
}
