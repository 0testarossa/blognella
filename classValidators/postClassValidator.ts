import {
    IsAlphanumeric,
    IsNotEmpty,
      IsString,
    } from 'class-validator';
    
    export class PostValidator {
      constructor(post) {
        this.date = post.date;
        this.tags = post.tags;
        this.title = post.title;
        this.content = post.content;
        this.comment = post.comment;
      }
    //   @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      date: string;
    
    //   @IsAlphanumeric()
    //   @IsNotEmpty()
    //   @IsString()
      tags: string[];

    //   @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      title: string[];

      content: any;

      comment: any;
    }
    
    export default PostValidator;