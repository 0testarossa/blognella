import {
    IsArray,
    IsDateString,
    IsNotEmpty,
      IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from './validation';

export class PostValidator {
    constructor(post) {
      this.date = post.date;
      this.tags = post.tags;
      this.title = post.title;
      this.content = post.content;
      this.comment = post.comment;
      this.user = post.user;
    }

    @IsDateString()
    date: string;
        
    @IsArray()
    tags: string[];

    @IsNotEmpty()
    @IsString()
    title: string[];

    content: any;

    comment: any;

    @IsNotEmpty()
    @IsString()
    user: string;
  }

    const postValidate = (post, language) => {
        const postValidator = new PostValidator(post);
        const val = validateOrRejectExample(postValidator)
        .then(data => {
            if(data.length > 0) {
                // console.log(data);
                return getAllValidationMsg(data[0].constraints, language)
            }
            return [];
        });
        return val
    }

export default postValidate;