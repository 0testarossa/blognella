"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AdminPanel_styles_1 = require("./AdminPanel.styles");
const AdminPanel = () => {
    const lang = localStorage.getItem("blognellaLang");
    return (react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanel, null,
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/posts" }, lang === "en" ? "POSTS" : "WPISY"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/bookmarks" }, lang === "en" ? "BOOKMARKS" : "ZAKŁADKI"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/users" }, lang === "en" ? "USERS" : "UŻYTKOWNICY"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/tags" }, lang === "en" ? "TAGS" : "ETYKIETY")))));
};
exports.default = AdminPanel;
//# sourceMappingURL=AdminPanel.js.map