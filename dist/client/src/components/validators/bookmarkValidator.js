"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const validation_1 = require("./validation");
class BookmarkValidator {
    constructor(bookmark) {
        this.title = bookmark.title;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], BookmarkValidator.prototype, "title", void 0);
const bookmarkValidate = (user, language) => {
    const bookmarkValidator = new BookmarkValidator(user);
    const val = validation_1.validateOrRejectExample(bookmarkValidator)
        .then(data => {
        if (data.length > 0) {
            // console.log(data);
            return validation_1.getAllValidationMsg(data[0].constraints, language);
        }
        return [];
    });
    return val;
};
exports.default = bookmarkValidate;
//# sourceMappingURL=bookmarkValidator.js.map