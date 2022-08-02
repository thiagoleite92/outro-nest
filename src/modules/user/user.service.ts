import { UserType } from './types/user.type';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { IUserService } from './interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password } = createUserDto;

    const newUser = await this.userRepository.insert({
      name,
      email,
      password,
    });

    return { name, email, id: newUser.identifiers[0].id };
  }

  async listOne(id: number): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['name', 'email', 'id'],
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID: ${id}, não foi encontrado`);
    }

    return user;
  }

  async listAll(): Promise<Array<UserType>> {
    const users = await this.userRepository.find({ select: ['name', 'email'] });

    return users;
  }

  async findAndUpdate(id: number, update: UpdateUserDto): Promise<any> {
    await this.listOne(id);

    await this.userRepository.update(id, update);

    return { message: 'Usuário atualizado com sucesso' };
  }

  async remove(id: number): Promise<void> {
    const user = await this.listOne(id);

    await this.userRepository.remove(user);

    return;
  }
}
