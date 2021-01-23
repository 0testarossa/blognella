"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AdminPanel_styles_1 = require("./AdminPanel.styles");
const AdminPanel = () => {
    return (react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanel, null,
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/posts" }, "POSTS"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/bookmarks" }, "BOOKMARKS"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/users" }, "USERS"))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/tags" }, "TAGS")))));
};
exports.default = AdminPanel;
//# sourceMappingURL=AdminPanel.js.map