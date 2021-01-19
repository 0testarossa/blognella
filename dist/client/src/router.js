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
                react_1.default.createElement(App_1.default, { page: testPage_1.default })))));
}
exports.default = BasicExample;
//# sourceMappingURL=router.js.map