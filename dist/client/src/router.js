"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
const loginPage_1 = __importDefault(require("./pages/loginPage"));
const registerPage_1 = __importDefault(require("./pages/registerPage"));
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
                react_1.default.createElement(App_1.default, null),
                " "),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/register" },
                react_1.default.createElement(registerPage_1.default, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login" },
                react_1.default.createElement(loginPage_1.default, null)))));
}
exports.default = BasicExample;
//# sourceMappingURL=router.js.map