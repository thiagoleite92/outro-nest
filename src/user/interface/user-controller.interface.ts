import { UpdateUserDto } from '../dto/update-user.dto';
import { UserType } from '../types/user.type';
import { CreateUserDto } from '../dto';

export interface IUserController {
  create(createUserDto: CreateUserDto): Promise<any>;
  listOne(id: number): Promise<UserType>;
  listAll(): Promise<Array<UserType>>;
  remove(id: number): Promise<void>;
  findAndUpdate(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<{ message: string }>;
}
