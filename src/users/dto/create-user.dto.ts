import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  dateOfBirth: string;

  @IsNotEmpty()
  residence: string;

  @IsNotEmpty()
  adress: string;

  @IsNotEmpty()
  phonenumber:String;

  @IsNotEmpty()
  password: string;
}