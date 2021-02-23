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
const validation_1 = require("../validators/validation");
class PostValidator {
    constructor(post) {
        this.title = post.title;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], PostValidator.prototype, "title", void 0);
exports.PostValidator = PostValidator;
const postTitleValidate = (post, language) => {
    const postValidator = new PostValidator(post);
    const val = validation_1.validateOrRejectExample(postValidator)
        .then(data => {
        if (data.length > 0) {
            const allValidationMsg = validation_1.getAllValidationMsg(data[0].constraints, language);
            return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
        }
        return [];
    });
    return val;
};
exports.default = postTitleValidate;
//# sourceMappingURL=postTitleValidator.js.map