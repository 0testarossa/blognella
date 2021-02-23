import {
    IsAlphanumeric,
    IsNotEmpty,
      IsString,
      NotContains,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

    class UserValidator {
      constructor(user) {
        this.nick = user.nick;
      }
      @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      @NotContains(' ')
      nick: string;
    }

    const userNickValidate = (user, language) => {
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

export default userNickValidate;