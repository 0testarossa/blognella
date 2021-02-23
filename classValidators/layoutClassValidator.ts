import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    Max,
    Min,
    } from 'class-validator';
import { LAYOUT_NAMES } from './ValidationEnums';
    
    export class LayoutValidator {
      constructor(layout) {
        this.name = layout.name;
        this.mainWidth = layout.mainWidth;
      }
      @IsEnum(LAYOUT_NAMES)
      name: string;

      @IsNotEmpty()
      @IsNumber()
      @Min(43)
      @Max(85)
      mainWidth: number;
    }
    
    export default LayoutValidator;