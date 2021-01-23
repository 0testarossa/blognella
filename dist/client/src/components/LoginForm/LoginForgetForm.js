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
const LoginForm_styles_1 = require("./LoginForm.styles");
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const core_1 = require("@material-ui/core");
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../APIRequests/User");
const LoginForgetForm = (props) => {
    const [login, setLogin] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [email, setEmail] = react_1.useState("");
    const updateUserPassword = (user) => {
        const updatedSser = {
            _id: user._id,
            nick: user.nick,
            login: user.login,
            password: password,
            role: user.role,
            email: user.email,
        };
        User_1.updateUser(updatedSser);
    };
    const onSubmit = () => {
        User_1.getUsers()
            .then(({ data: { users } }) => {
            const user = users.find((user) => user.login === login && user.email === email);
            if (user) {
                updateUserPassword(user);
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            }
        })
            .catch((err) => console.log(err));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LoginForm_styles_1.StyledLoginForm, null,
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Email", style: { margin: 8 }, placeholder: "Please type in your email here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setEmail(input.target.value) })),
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Login", style: { margin: 8 }, placeholder: "Please type in your login here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setLogin(input.target.value) })),
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "New Password", style: { margin: 8 }, placeholder: "Please type in your new password here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setPassword(input.target.value) })),
            react_1.default.createElement(LoginForm_styles_1.LogicControls, null,
                react_1.default.createElement("div", null),
                react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onSubmit }, "Update Password")))));
};
exports.default = react_router_dom_1.withRouter(LoginForgetForm);
//# sourceMappingURL=LoginForgetForm.js.map