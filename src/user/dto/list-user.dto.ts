import { IsString } from 'class-validator';

export class ListUserDto {
  @IsString()
  id: string;
}
