"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultView_styles_1 = require("../DefaultView/DefaultView.styles");
const react_router_dom_1 = require("react-router-dom");
const DefaultViewLinks = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DefaultView_styles_1.LoginRegisterContainer, null,
            react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")),
            react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Register"))),
        react_1.default.createElement(DefaultView_styles_1.MainViewTabsContainer, null,
            react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")))));
};
exports.default = DefaultViewLinks;
//# sourceMappingURL=DefaultViewLinks.js.map