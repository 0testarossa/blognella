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
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["GUEST"] = "guest";
    USER_ROLES["LOOGED_USER"] = "loggedUser";
    USER_ROLES["ADMIN"] = "admin";
})(USER_ROLES || (USER_ROLES = {}));
class UserValidator {
    constructor(user) {
        this.nick = user.nick;
        this.login = user.login;
        this.password = user.password;
        this.role = user.role;
        this.email = user.email;
    }
}
__decorate([
    class_validator_1.IsAlphanumeric(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.NotContains(' ')
], UserValidator.prototype, "nick", void 0);
__decorate([
    class_validator_1.IsAlphanumeric(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.NotContains(' '),
    class_validator_1.MinLength(2)
], UserValidator.prototype, "login", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(7),
    class_validator_1.NotContains(' ')
], UserValidator.prototype, "password", void 0);
__decorate([
    class_validator_1.IsEnum(USER_ROLES)
], UserValidator.prototype, "role", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.NotContains(' '),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty()
], UserValidator.prototype, "email", void 0);
const userValidate = (user, language) => {
    const userValidator = new UserValidator(user);
    const val = validation_1.validateOrRejectExample(userValidator)
        .then(data => {
        if (data.length > 0) {
            // console.log(data);
            return validation_1.getAllValidationMsg(data[0].constraints, language);
        }
        return [];
    });
    return val;
};
exports.default = userValidate;
//# sourceMappingURL=userValidator.js.map