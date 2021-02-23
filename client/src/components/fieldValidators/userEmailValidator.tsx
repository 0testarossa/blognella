import {
      IsEmail,
    IsNotEmpty,
      IsString,
      NotContains,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

    class UserValidator {
      constructor(user) {
        this.email = user.email;
      }
      @IsEmail()
      @NotContains(' ')
      @IsString()
      @IsNotEmpty()
      email: string;
    }

    const userEmailValidate = (user, language) => {
        const userValidator = new UserValidator(user);
        const val = validateOrRejectExample(userValidator)
        .then(data => {
            if(data.length > 0) {
                // console.log(data);
                const allValidationMsg = getAllValidationMsg(data[0].constraints, language);
                return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
            }
            return [];
        });
        return val
    }

export default userEmailValidate;