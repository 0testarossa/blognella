import {
    IsNotEmpty,
    IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from './validation';

    class BookmarkValidator {
    constructor(bookmark) {
      this.title = bookmark.title;
    }
    @IsNotEmpty()
    @IsString()
    title: string;

    post: any;
  }

    const bookmarkValidate = (user, language) => {
        const bookmarkValidator = new BookmarkValidator(user);
        const val = validateOrRejectExample(bookmarkValidator)
        .then(data => {
            if(data.length > 0) {
                console.log(data);
                return getAllValidationMsg(data[0].constraints, language)
            }
            return [];
        });
        return val
    }

export default bookmarkValidate;