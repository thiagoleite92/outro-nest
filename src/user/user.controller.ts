import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, ListUserDto } from './dto';
import { IUserController } from './interface/user-controller.interface';

@Controller('user')
export class UserController implements IUserController {
  constructor(private userService: UserService) {}

  @Get('list/:id')
  async listOne(@Param('id') id: ListUserDto): Promise<any> {
    const response = this.userService.listOne(id);
    return response;
  }

  @Get('list')
  async listAll(): Promise<string> {
    const response = this.userService.listAll();

    return response;
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    const response = this.userService.create(createUserDto);
    return response;
  }

  @Put('edit/:id')
  findAndUpdate(@Param('id') id: string, @Body() update: any): Promise<any> {
    const response = this.userService.findAndUpdate(+id, update);

    return response;
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: ListUserDto): Promise<any> {
    const response = this.userService.remove(+id);
    return response;
  }
}
