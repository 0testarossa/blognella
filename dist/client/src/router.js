"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
// import App from "./App";
const loginPage_1 = __importDefault(require("./pages/loginPage"));
const mainViewPage_1 = __importDefault(require("./pages/mainViewPage"));
const registerPage_1 = __importDefault(require("./pages/registerPage"));
const testPage_1 = __importDefault(require("./pages/testPage"));
const panelTagsPage_1 = __importDefault(require("./pages/panelTagsPage"));
const panelPostsAddingPage_1 = __importDefault(require("./pages/panelPostsAddingPage"));
const panelPostsPage_1 = __importDefault(require("./pages/panelPostsPage"));
const panelPostsUpdatingPage_1 = __importDefault(require("./pages/panelPostsUpdatingPage"));
const panelBookmarkPage_1 = __importDefault(require("./pages/panelBookmarkPage"));
const panelBookmarkAddingPage_1 = __importDefault(require("./pages/panelBookmarkAddingPage"));
const panelBookmarkUpdatingPage_1 = __importDefault(require("./pages/panelBookmarkUpdatingPage"));
const panelUsersPage_1 = __importDefault(require("./pages/panelUsersPage"));
const panelUsersAddingPage_1 = __importDefault(require("./pages/panelUsersAddingPage"));
const panelUsersUpdatingPage_1 = __importDefault(require("./pages/panelUsersUpdatingPage"));
// export default <Router history={hashHistory}>
//   <Route path="/" component={App}>
//     <IndexRoute component={AppSplash}/>
//     <Route path="demo" component={AppDemo}/>
//   </Route>
// </Router>
function BasicExample() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                " ",
                react_1.default.createElement(App_1.default, { page: mainViewPage_1.default }),
                " "),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/register" },
                react_1.default.createElement(App_1.default, { page: registerPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login" },
                react_1.default.createElement(App_1.default, { page: loginPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/test" },
                react_1.default.createElement(App_1.default, { page: testPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/tags" },
                react_1.default.createElement(App_1.default, { page: panelTagsPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/posts/add" },
                react_1.default.createElement(App_1.default, { page: panelPostsAddingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/posts/:id" },
                react_1.default.createElement(App_1.default, { page: panelPostsUpdatingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/posts" },
                react_1.default.createElement(App_1.default, { page: panelPostsPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/bookmarks/add" },
                react_1.default.createElement(App_1.default, { page: panelBookmarkAddingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/bookmarks/:id" },
                react_1.default.createElement(App_1.default, { page: panelBookmarkUpdatingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/bookmarks" },
                react_1.default.createElement(App_1.default, { page: panelBookmarkPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/users/add" },
                react_1.default.createElement(App_1.default, { page: panelUsersAddingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/users/:id" },
                react_1.default.createElement(App_1.default, { page: panelUsersUpdatingPage_1.default })),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/panel/users" },
                react_1.default.createElement(App_1.default, { page: panelUsersPage_1.default })))));
}
exports.default = BasicExample;
//# sourceMappingURL=router.js.map