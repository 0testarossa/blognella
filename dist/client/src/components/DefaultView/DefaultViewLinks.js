"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DefaultView_styles_1 = require("../DefaultView/DefaultView.styles");
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../APIRequests/User");
const DefaultViewTabs_1 = __importDefault(require("./DefaultViewTabs"));
const App_1 = require("../../App");
const SearchComponent_1 = __importDefault(require("../SearchComponent/SearchComponent"));
const DefaultViewLinks = (props) => {
    const [nick, setNick] = react_1.useState("");
    const [role, setRole] = react_1.useState("");
    const lang = localStorage.getItem('blognellaLang');
    const fetchUser = () => {
        User_1.getUser(localStorage.getItem('blognellaId') || "")
            .then(({ data: { user } }) => {
            if (!nick) {
                setNick(user.nick);
            }
            if (!role) {
                setRole(user.role);
            }
        })
            .catch((err) => console.log(err));
    };
    const onLogout = () => {
        localStorage.removeItem('blognellaId');
        if (props.match.path === "/") {
            window.location.reload();
        }
        else {
            props.history.push('/');
        }
    };
    if (localStorage.getItem('blognellaId'))
        fetchUser();
    const changeLanguage = () => {
        const actualLang = localStorage.getItem('blognellaLang') || "en";
        actualLang === "en" ? localStorage.setItem("blognellaLang", "pl") : localStorage.setItem("blognellaLang", "en");
        window.location.reload();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DefaultView_styles_1.LoginRegisterContainer, null,
            react_1.default.createElement(DefaultView_styles_1.SearchElement, null,
                react_1.default.createElement(SearchComponent_1.default, null)),
            App_1.availablePages.includes(props.pageName) && role === "admin" ? react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/posts" }, "Panel")) : react_1.default.createElement(react_1.default.Fragment, null),
            nick ? react_1.default.createElement(DefaultView_styles_1.LinkElement, { onClick: onLogout },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    lang === "en" ? "Logout" : "Wyloguj",
                    " ",
                    react_1.default.createElement("span", { style: { fontWeight: "bold" } }, nick))) :
                react_1.default.createElement(DefaultView_styles_1.LinkLoginElement, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, lang === "en" ? "Login" : "Zaloguj")),
            !nick ? react_1.default.createElement(DefaultView_styles_1.LinkLoginElement, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, lang === "en" ? "Register" : "Zarejestruj")) : react_1.default.createElement(react_1.default.Fragment, null),
            react_1.default.createElement(DefaultView_styles_1.LinkElement, { onClick: changeLanguage },
                react_1.default.createElement("a", null, localStorage.getItem('blognellaLang') || "en"))),
        react_1.default.createElement(DefaultViewTabs_1.default, null)));
};
exports.default = react_router_dom_1.withRouter(DefaultViewLinks);
//# sourceMappingURL=DefaultViewLinks.js.map