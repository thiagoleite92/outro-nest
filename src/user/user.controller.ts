import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './types/user.type';
import { UserService } from './user.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto';
import { IUserController } from './interface/user-controller.interface';

@Controller('user')
export class UserController implements IUserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    try {
      const newUser = await this.userService.create(createUserDto);

      return newUser;
    } catch (error) {
      console.log(error);

      if (error.errno === 1062) {
        throw new ConflictException('Email já cadastrado');
      }

      throw new InternalServerErrorException(
        'Algo deu errado! Tente novamente mais tarde',
      );
    }
  }

  @Get('list/:id')
  async listOne(@Param('id') id: number): Promise<UserType> {
    const response = await this.userService.listOne(id);

    return response;
  }

  @Get('list')
  async listAll(): Promise<Array<UserType>> {
    try {
      const response = await this.userService.listAll();

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Algo deu errado! Tente novamente mais tarde',
      );
    }
  }

  @Put('edit/:id')
  async findAndUpdate(
    @Param('id') id: number,
    @Body() update: UpdateUserDto,
  ): Promise<any> {
    try {
      const response = await this.userService.findAndUpdate(id, update);

      return response;
    } catch (error) {
      if (error.errno === 1062) {
        throw new ConflictException('Email já cadastrado');
      }

      throw new InternalServerErrorException(
        'Algo deu errado! Tente novamente mais tarde',
      );
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number): Promise<any> {
    try {
      const response = await this.userService.remove(id);

      return response;
    } catch (error) {
      throw new NotFoundException(`Usuário com ID: ${id}, não foi encontrado`);
    }
  }
}
