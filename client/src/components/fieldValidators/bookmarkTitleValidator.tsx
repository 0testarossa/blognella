import {
    IsNotEmpty,
    IsString,
    } from 'class-validator';
import { getAllValidationMsg, validateOrRejectExample } from '../validators/validation';

    class BookmarkValidator {
    constructor(bookmark) {
      this.title = bookmark.title;
    }
    @IsNotEmpty()
    @IsString()
    title: string;
  }

    const bookmarkTitleValidate = (user, language) => {
        const bookmarkValidator = new BookmarkValidator(user);
        const val = validateOrRejectExample(bookmarkValidator)
        .then(data => {
            if(data.length > 0) {
                const allValidationMsg = getAllValidationMsg(data[0].constraints, language);
                return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
            }
            return [];
        });
        return val
    }

export default bookmarkTitleValidate;