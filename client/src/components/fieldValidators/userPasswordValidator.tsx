import {
    IsNotEmpty,
      IsString,
      MinLength,
      NotContains,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

    class UserValidator {
      constructor(user) {
        this.password = user.password;
      }
      @IsNotEmpty()
      @IsString()
      @MinLength(7)
      @NotContains(' ')
      password: string;
    }

    const userPasswordValidate = (user, language) => {
        const userValidator = new UserValidator(user);
        const val = validateOrRejectExample(userValidator)
        .then(data => {
            if(data.length > 0) {
                const allValidationMsg = getAllValidationMsg(data[0].constraints, language);
                return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
            }
            return [];
        });
        return val
    }

export default userPasswordValidate;