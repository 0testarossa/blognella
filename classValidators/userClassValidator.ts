import {
  IsAlphanumeric,
    IsEmail,
  IsNotEmpty,
    IsString,
    MinLength,
    NotContains,
  } from 'class-validator';
  
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
    nick: any;
  
    @IsAlphanumeric()
    @IsNotEmpty()
    @IsString()
    @NotContains(' ')
    login: any;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    @NotContains(' ')
    password: any;
  
    @IsString()
    role: any;
  
    @IsEmail()
    email: any;
  }
  
  export default UserValidator;