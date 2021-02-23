import {
    IsNotEmpty,
      IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

export class PostValidator {
    constructor(post) {
      this.user = post.user;
    }
    @IsNotEmpty()
    @IsString()
    user: string;
  }

    const postUserValidate = (post, language) => {
        const postValidator = new PostValidator(post);
        const val = validateOrRejectExample(postValidator)
        .then(data => {
            if(data.length > 0) {
                const allValidationMsg = getAllValidationMsg(data[0].constraints, language);
                return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
            }
            return [];
        });
        return val
    }

export default postUserValidate;