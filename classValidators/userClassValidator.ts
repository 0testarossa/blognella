import {
  IsAlphanumeric,
    IsEmail,
    IsEnum,
  IsNotEmpty,
    IsString,
    MinLength,
    NotContains,
  } from 'class-validator';
import { USER_ROLES } from './ValidationEnums';
  
  export class UserValidator {
    constructor(user) {
      this.nick = user.nick;
      this.login = user.login;
      this.password = user.password;
      this.role = user.role;
      this.email = user.email;
    }
    @IsAlphanumeric()
    @IsNotEmpty()
    @IsString()
    @NotContains(' ')
    nick: string;
  
    @IsAlphanumeric()
    @IsNotEmpty()
    @IsString()
    @NotContains(' ')
    @MinLength(2)
    login: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    @NotContains(' ')
    password: string;
  
    @IsEnum(USER_ROLES)
    role: string;
  
    @IsEmail()
    @NotContains(' ')
    @IsString()
    @IsNotEmpty()
    email: string;
  }
  
  export default UserValidator;