"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultView_styles_1 = require("./DefaultView.styles");
const DefaultViewLinks_1 = __importDefault(require("./DefaultViewLinks"));
// import { LinksContainer, Logo, LogoContainer } from "./DefaultView.styles";
const DefaultView = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DefaultView_styles_1.LogoContainer, null,
            react_1.default.createElement(DefaultView_styles_1.Logo, null, "Kiranella"),
            react_1.default.createElement(DefaultView_styles_1.LinksContainer, null,
                react_1.default.createElement("div", null))),
        react_1.default.createElement(DefaultViewLinks_1.default, Object.assign({}, props))));
};
exports.default = DefaultView;
//# sourceMappingURL=DefaultView.js.map