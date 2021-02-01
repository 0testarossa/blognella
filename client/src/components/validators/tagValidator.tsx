import {
    IsNotEmpty,
    IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from './validation';

    class TagValidator {
    constructor(tag) {
      this.name = tag.name;
    }
    @IsNotEmpty()
    @IsString()
    name: string;
  }

    const tagValidate = (user, language) => {
        const tagValidator = new TagValidator(user);
        const val = validateOrRejectExample(tagValidator)
        .then(data => {
            if(data.length > 0) {
                // console.log(data);
                return getAllValidationMsg(data[0].constraints, language)
            }
            return [];
        });
        return val
    }

export default tagValidate;