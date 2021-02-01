"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueValidatorMsg = exports.getValidatorMsg = void 0;
const react_1 = __importDefault(require("react"));
const validation_1 = require("./validation");
const getValidatorMsg = (messages) => {
    return messages.map((message) => react_1.default.createElement("div", { key: message }, message));
};
exports.getValidatorMsg = getValidatorMsg;
const getUniqueValidatorMsg = (messages, lang) => {
    return Object.keys(messages).map((field) => lang === "en" ? `${field} should be unique` : `pole ${validation_1.getPolishEntity(field)} musi byc unikalne`);
};
exports.getUniqueValidatorMsg = getUniqueValidatorMsg;
//# sourceMappingURL=validatorMsg.js.map