import {
    IsDateString,
    IsNotEmpty,
    IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from './validation';

    export class CommentValidator {
    constructor(comment) {
      this.date = comment.date;
      this.text = comment.text;
      this.user = comment.user;
    }
    @IsDateString()
    date: string;

    @IsNotEmpty()
    @IsString()
    text: string[];

    @IsNotEmpty()
    @IsString()
    user: string;
  }

    const commentValidate = (user, language) => {
        const commentValidator = new CommentValidator(user);
        const val = validateOrRejectExample(commentValidator)
        .then(data => {
            if(data.length > 0) {
                // console.log(data);
                return getAllValidationMsg(data[0].constraints, language)
            }
            return [];
        });
        return val
    }

export default commentValidate;