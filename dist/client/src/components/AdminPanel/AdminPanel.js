"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AdminPanel_styles_1 = require("./AdminPanel.styles");
const Bookmarks_1 = __importDefault(require("@material-ui/icons/Bookmarks"));
const Person_1 = __importDefault(require("@material-ui/icons/Person"));
const Notes_1 = __importDefault(require("@material-ui/icons/Notes"));
const LocalOffer_1 = __importDefault(require("@material-ui/icons/LocalOffer"));
const ColorLens_1 = __importDefault(require("@material-ui/icons/ColorLens"));
const AdminPanel = () => {
    const lang = localStorage.getItem("blognellaLang");
    return (react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanel, null,
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/posts" },
                    react_1.default.createElement(AdminPanel_styles_1.CenteredSpan, null,
                        react_1.default.createElement(Notes_1.default, null),
                        lang === "en" ? "POSTS" : "WPISY")))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/bookmarks" },
                    react_1.default.createElement(AdminPanel_styles_1.CenteredSpan, null,
                        react_1.default.createElement(Bookmarks_1.default, null),
                        lang === "en" ? "BOOKMARKS" : "ZAKŁADKI")))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/users" },
                    react_1.default.createElement(AdminPanel_styles_1.CenteredSpan, null,
                        react_1.default.createElement(Person_1.default, null),
                        lang === "en" ? "USERS" : "UŻYTKOWNICY")))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/tags" },
                    react_1.default.createElement(AdminPanel_styles_1.CenteredSpan, null,
                        react_1.default.createElement(LocalOffer_1.default, null),
                        lang === "en" ? "TAGS" : "ETYKIETY")))),
        react_1.default.createElement(AdminPanel_styles_1.StyledAdminPanelItem, null,
            react_1.default.createElement(AdminPanel_styles_1.StyledText, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/layouts" },
                    react_1.default.createElement(AdminPanel_styles_1.CenteredSpan, null,
                        react_1.default.createElement(ColorLens_1.default, null),
                        lang === "en" ? "LAYOUTS" : "WYGLĄD STRONY"))))));
};
exports.default = AdminPanel;
//# sourceMappingURL=AdminPanel.js.map