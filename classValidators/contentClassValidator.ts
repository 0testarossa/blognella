import {
    IsAlphanumeric,
    IsNotEmpty,
      IsString,
    } from 'class-validator';
    
    export class ContentValidator {
      constructor(content) {
        this.text = content.text;
        this.title = content.title;
      }
    //   @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      text: string;
    
      @IsAlphanumeric()
      @IsNotEmpty()
      @IsString()
      title: string;
    }
    
    export default ContentValidator;