"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrRejectExample = void 0;
const class_validator_1 = require("class-validator");
function validateOrRejectExample(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield class_validator_1.validateOrReject(input);
            return 'OK';
        }
        catch (errors) {
            //   console.log('Caught promise rejection (validation failed). Errors: ', errors);
            throw errors;
        }
    });
}
exports.validateOrRejectExample = validateOrRejectExample;
//# sourceMappingURL=validation.js.map