"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValidator = void 0;
const class_validator_1 = require("class-validator");
const validation_1 = require("./validation");
class PostValidator {
    constructor(post) {
        this.date = post.date;
        this.tags = post.tags;
        this.title = post.title;
        this.content = post.content;
        this.comment = post.comment;
        this.user = post.user;
    }
}
__decorate([
    class_validator_1.IsDateString()
], PostValidator.prototype, "date", void 0);
__decorate([
    class_validator_1.IsArray()
], PostValidator.prototype, "tags", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], PostValidator.prototype, "title", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], PostValidator.prototype, "user", void 0);
exports.PostValidator = PostValidator;
const postValidate = (post, language) => {
    const postValidator = new PostValidator(post);
    const val = validation_1.validateOrRejectExample(postValidator)
        .then(data => {
        if (data.length > 0) {
            console.log(data);
            return validation_1.getAllValidationMsg(data[0].constraints, language);
        }
        return [];
    });
    return val;
};
exports.default = postValidate;
//# sourceMappingURL=postValidator.js.map