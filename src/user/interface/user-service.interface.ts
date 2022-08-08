import { UserType } from '../types/user.type';
import { CreateUserDto } from '../dto';

export interface IUserService {
  create(createUserDto: CreateUserDto): Promise<string>;
  listOne(id: number): Promise<UserType>;
  listAll(): Promise<Array<UserType> | []>;
  findAndUpdate(
    id: number,
    updateUserDto: any,
  ): Promise<{ message: 'Usuário atualizado com sucesso!' }>;
  remove(id: number): Promise<void>;
}
