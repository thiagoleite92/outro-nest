import { UserType } from './types/user.type';
import { UserService } from './user.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
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

      if (error.errono === 1062) {
        throw new ConflictException('Email já cadastrado');
      }

      return 'Cadê o email?';
    }
  }

  @Get('list/:id')
  async listOne(@Param('id') id: number): Promise<UserType> {
    const response = this.userService.listOne(+id);
    return response;
  }

  @Get('list')
  async listAll(): Promise<Array<UserType>> {
    const response = await this.userService.listAll();

    return response;
  }

  @Put('edit/:id')
  findAndUpdate(@Param('id') id: string, @Body() update: any): Promise<any> {
    const response = this.userService.findAndUpdate(+id, update);

    return response;
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string): Promise<any> {
    const response = this.userService.remove(+id);
    return response;
  }
}
