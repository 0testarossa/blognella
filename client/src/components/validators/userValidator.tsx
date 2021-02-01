import {
    IsAlphanumeric,
      IsEmail,
      IsEnum,
    IsNotEmpty,
      IsString,
      MinLength,
      NotContains,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from './validation';

enum USER_ROLES {
    GUEST = "guest",
    LOOGED_USER = "loggedUser",
    ADMIN = "admin"
}

    class UserValidator {
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

    const userValidate = (user, language) => {
        const userValidator = new UserValidator(user);
        const val = validateOrRejectExample(userValidator)
        .then(data => {
            if(data.length > 0) {
                // console.log(data);
                return getAllValidationMsg(data[0].constraints, language)
            }
            return [];
        });
        return val
    }

export default userValidate;