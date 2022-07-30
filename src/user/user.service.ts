import { User } from './entity/user.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto, ListUserDto } from './dto';
import { IUserService } from './interface';

@Injectable()
export class UserService implements IUserService {
  private users: Array<any>;
  constructor(
    @Inject('user_repository')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.userRepository.insert(createUserDto);

      return user;
    } catch (e) {
      console.log(e);
      return 'deu erro';
    }
  }

  async listOne(id: ListUserDto) {
    const user = await this.userRepository.findOne({
      where: { id: +id },
    });

    if (!user) {
      throw new NotFoundException(`user ${id} not found`);
    }

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

  async remove(id: ListUserDto): Promise<any> {
    const user = await this.listOne(id);

    await this.userRepository.remove(user);

    return;
  }
}
