import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, ListUserDto } from './dto';
import { IUserController } from './interface/user-controller.interface';

@Controller('user')
export class UserController implements IUserController {
  @Get('list/:id')
  async listOne(@Param('id') id: ListUserDto): Promise<any> {
    console.log(id);
    return id;
  }
  @Get('list')
  async listAll(): Promise<string> {
    return ' all Users';
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return { message: 'Usuario criado', new_user: createUserDto };
  }
}
