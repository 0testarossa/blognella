"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultView_styles_1 = require("./DefaultView.styles");
const DefaultViewAbout = () => {
    return (react_1.default.createElement(DefaultView_styles_1.AboutSection, null,
        react_1.default.createElement("div", null, "About"),
        react_1.default.createElement("div", null, "Example")));
};
exports.default = DefaultViewAbout;
//# sourceMappingURL=DefaultViewAbout.js.map