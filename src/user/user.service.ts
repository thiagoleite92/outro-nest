import { UserType } from './types/user.type';
import { UpdateCourseDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { IUserService } from './interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('user_repository')
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

  async listOne(id: number): Promise<UserType> {
    const user = await this.userRepository.findOne({
      where: { id: +id },
    });

    if (!user) {
      throw new NotFoundException(`user ${id} not found`);
    }

    return user;
  }

  async listAll(): Promise<Array<UserType>> {
    const users = await this.userRepository.find();

    return users;
  }

  async findAndUpdate(id: number, update: UpdateCourseDto): Promise<any> {
    const user = await this.listOne(id);

    user.name = update.name;

    console.log(user, 'aqui');

    return user;
  }

  async remove(id: number): Promise<void> {
    const user = await this.listOne(id);

    await this.userRepository.delete(user);

    return;
  }
}
