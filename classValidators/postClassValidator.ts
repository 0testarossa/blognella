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
        this.user = post.user;
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

      @IsNotEmpty()
      @IsString()
      user: string;
    }
    
    export default PostValidator;