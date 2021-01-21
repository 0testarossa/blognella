"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkValidator = void 0;
const class_validator_1 = require("class-validator");
class BookmarkValidator {
    constructor(bookmark) {
        this.title = bookmark.title;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], BookmarkValidator.prototype, "title", void 0);
exports.BookmarkValidator = BookmarkValidator;
exports.default = BookmarkValidator;
//# sourceMappingURL=bookmarkClassValidator.js.map