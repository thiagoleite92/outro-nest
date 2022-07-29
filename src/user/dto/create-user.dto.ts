import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 25)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(5, 25)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 16)
  @IsNotEmpty()
  password: string;
}
