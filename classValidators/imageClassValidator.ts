import {
    IsNotEmpty,
      IsString,
      NotContains,
    } from 'class-validator';
    
    export class ImageValidator {
      constructor(image) {
        this.name = image.name;
        this.data = image.data;
      }
      @IsNotEmpty()
      @IsString()
      @NotContains(' ')
      name: string;
    
      @IsNotEmpty()
      @IsString()
      @NotContains(' ')
      data: string;
    }
    
    export default ImageValidator;