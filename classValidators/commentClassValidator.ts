import {
    IsNotEmpty,
      IsString,
    } from 'class-validator';
    
    export class CommentValidator {
      constructor(comment) {
        this.date = comment.date;
        this.text = comment.text;
        this.user = comment.user;
      }
    //   @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      date: string;

    //   @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      text: string[];

      @IsNotEmpty()
      @IsString()
      user: string;
    }
    
    export default CommentValidator;