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
exports.availablePages = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = require("./APIRequests/Layout");
const User_1 = require("./APIRequests/User");
const App_styles_1 = require("./App.styles");
const AdminPanel_1 = __importDefault(require("./components/AdminPanel/AdminPanel"));
const DefaultView_1 = __importDefault(require("./components/DefaultView/DefaultView"));
const DefaultView_styles_1 = require("./components/DefaultView/DefaultView.styles");
const DefaultViewAbout_1 = __importDefault(require("./components/DefaultView/DefaultViewAbout"));
require("./components/globalStyles/globalStyles.css");
const MainView_styles_1 = require("./components/MainView/MainView.styles");
exports.availablePages = ["/register", "/login/forget", "/login", "/ui/post/:id", "/search", "/"];
const App = (props) => {
    const [role, setRole] = react_1.useState("");
    const layout = localStorage.getItem('blognellaTheme') || "default";
    const mainWidth = localStorage.getItem('blognellaWidth') ? Number(localStorage.getItem('blognellaWidth')) : 80;
    const fetchUser = () => {
        const userId = localStorage.getItem('blognellaId') || "";
        if (userId) {
            User_1.getUser(userId)
                .then(({ data: { user } }) => {
                if (role !== user.role) {
                    setRole(user.role);
                }
            })
                .catch((err) => console.log(err));
        }
        else {
            setRole("guest");
        }
    };
    const fetchLayout = () => {
        Layout_1.getLayouts()
            .then(({ data: { layouts } }) => {
            const rootComponent = document.getElementById("root");
            if (layouts.length > 0) {
                if (rootComponent !== null) {
                    rootComponent.style.minHeight = "100vh";
                    rootComponent.style.backgroundColor = App_styles_1.theme.root[layouts[0].name];
                    localStorage.setItem('blognellaTheme', layouts[0].name);
                    localStorage.setItem('blognellaWidth', layouts[0].mainWidth);
                }
            }
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchUser();
        if (!localStorage.getItem('blognellaLang')) {
            localStorage.setItem('blognellaLang', "en");
        }
        fetchLayout();
    }, [props]);
    if (props.match.path === "/login" && localStorage.getItem('blognellaId')) {
        props.history.push("/");
    }
    ;
    if (!exports.availablePages.includes(props.match.path) && role !== "admin" && role) {
        props.history.push("/");
    }
    ;
    const Content = props.page;
    return (react_1.default.createElement(App_styles_1.StyledMain, { inputColor: App_styles_1.theme.inputText[layout], style: { backgroundColor: App_styles_1.theme.page[layout], color: App_styles_1.theme.text[layout] } },
        react_1.default.createElement(DefaultView_1.default, { pageName: props.match.path }),
        react_1.default.createElement(DefaultView_styles_1.MainContentContainer, null,
            react_1.default.createElement(MainView_styles_1.MainViewContainer, { minWidth: exports.availablePages.includes(props.match.path) ? `${mainWidth * 9.3}px` : "unset", width: exports.availablePages.includes(props.match.path) ? `${mainWidth * 9.3}px` : "100%" },
                react_1.default.createElement(DefaultView_styles_1.StyledAdminPanelContainer, { color: App_styles_1.theme.text[layout], decoratedColor: App_styles_1.theme.decoratedText[layout] }, role &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        !exports.availablePages.includes(props.match.path) ? react_1.default.createElement(AdminPanel_1.default, null) : react_1.default.createElement(react_1.default.Fragment, null),
                        react_1.default.createElement(App_styles_1.StyledPanelContent, { width: "100%", iconColor: App_styles_1.theme.text[layout] },
                            react_1.default.createElement(Content, null))))),
            exports.availablePages.includes(props.match.path) ? react_1.default.createElement(DefaultView_styles_1.AboutSection, { color: App_styles_1.theme.decoratedText[layout] },
                react_1.default.createElement(DefaultViewAbout_1.default, null)) : react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.default = react_router_dom_1.withRouter(App);
//# sourceMappingURL=App.js.map