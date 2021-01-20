import {
    IsNotEmpty,
      IsString,
    } from 'class-validator';
    
    export class TagValidator {
      constructor(tag) {
        this.name = tag.name;
      }
      @IsNotEmpty()
      @IsString()
      name: string;
    }
    
    export default TagValidator;