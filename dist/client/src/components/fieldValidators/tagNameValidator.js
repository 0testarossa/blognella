"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const validation_1 = require("../validators/validation");
class TagValidator {
    constructor(tag) {
        this.name = tag.name;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString()
], TagValidator.prototype, "name", void 0);
const tagNameValidate = (user, language) => {
    const tagValidator = new TagValidator(user);
    const val = validation_1.validateOrRejectExample(tagValidator)
        .then(data => {
        if (data.length > 0) {
            const allValidationMsg = validation_1.getAllValidationMsg(data[0].constraints, language);
            return allValidationMsg.length > 0 ? allValidationMsg[0] : "";
        }
        return [];
    });
    return val;
};
exports.default = tagNameValidate;
//# sourceMappingURL=tagNameValidator.js.map