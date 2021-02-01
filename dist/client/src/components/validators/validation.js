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
exports.getAllValidationMsg = exports.getPolishEntity = exports.validateOrRejectExample = void 0;
const class_validator_1 = require("class-validator");
function validateOrRejectExample(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield class_validator_1.validateOrReject(input);
            return [];
        }
        catch (errors) {
            //   console.log('Caught promise rejection (validation failed). Errors: ', errors);
            //   throw errors;
            return errors;
        }
    });
}
exports.validateOrRejectExample = validateOrRejectExample;
const getPolishEntity = (entity) => {
    if (entity === "password") {
        return "hasło";
    }
    else if (entity === "role") {
        return "rola";
    }
    else if (entity === "date") {
        return "data";
    }
    else if (entity === "tags") {
        return "etykiety";
    }
    else if (entity === "title") {
        return "tytuł";
    }
    else if (entity === "content") {
        return "treść";
    }
    else if (entity === "comment") {
        return "komentarz";
    }
    else if (entity === "user") {
        return "użytkownik";
    }
    else if (entity === "post") {
        return "wpis";
    }
    else if (entity === "name") {
        return "nazwa";
    }
    else if (entity === "text") {
        return "tekst";
    }
    return entity;
};
exports.getPolishEntity = getPolishEntity;
const getValidationMsg = (englishConstraintMsg, constraint) => {
    const entity = exports.getPolishEntity(getFirstWord(englishConstraintMsg));
    if (constraint === "isAlphanumeric") {
        return `pole ${entity} musi zawierać tylko litery i liczby`;
    }
    else if (constraint === "isNotEmpty") {
        return `pole ${entity} nie jest dozwole puste`;
    }
    else if (constraint === "isString") {
        return `pole ${entity} musi być tekstem`;
    }
    else if (constraint === "notContains") {
        return `pole ${entity} nie może zawierać spacji`;
    }
    else if (constraint === "minLength") {
        return `pole ${entity} musi zawierać co najmniej wymaganą liczbę znaków`;
    }
    else if (constraint === "isEmail") {
        return `pole ${entity} musi być prawidłowym emailem`;
    }
    else if (constraint === "isArray") {
        return `pole ${entity} musi być zbiorem etykiet`;
    }
    else if (constraint === "isDateString") {
        return `pole ${entity} musi być w poprawnym formacie daty`;
    }
    return "";
};
const getFirstWord = (string) => {
    return string.replace(/ .*/, '');
};
const getAllValidationMsg = (validation, language) => {
    const allValidationMsg = Object.keys(validation).map((con) => {
        if (con === "isAlphanumeric") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "isNotEmpty") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "isString") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "notContains") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "minLength") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "isEmail") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "isArray") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        else if (con === "isDateString") {
            return language === "en" ? validation[con] : getValidationMsg(validation[con], con);
        }
        return "";
    });
    return allValidationMsg;
};
exports.getAllValidationMsg = getAllValidationMsg;
//# sourceMappingURL=validation.js.map