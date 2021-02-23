import {
    IsNotEmpty,
    IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

    class TagValidator {
    constructor(tag) {
      this.name = tag.name;
    }
    @IsNotEmpty()
    @IsString()
    name: string;
  }

    const tagNameValidate = (user, language) => {
        const tagValidator = new TagValidator(user);
        const val = validateOrRejectExample(tagValidator)
        .then(data => {
            if(data.length > 0) {
                const allValidationMsg = getAllValidationMsg(data[0].constraints, language);
                return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
            }
            return [];
        });
        return val
    }

export default tagNameValidate;