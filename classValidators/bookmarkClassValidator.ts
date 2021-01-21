import {
    IsNotEmpty,
      IsString,
    } from 'class-validator';
    
    export class BookmarkValidator {
      constructor(bookmark) {
        this.title = bookmark.title;
      }
      @IsNotEmpty()
      @IsString()
      title: string;

      post: any;
    }
    
    export default BookmarkValidator;