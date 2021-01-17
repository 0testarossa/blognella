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
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const core_1 = require("@material-ui/core");
const RegisterForm_styles_1 = require("./RegisterForm.styles");
const User_1 = require("../../APIRequests/User");
const RegisterForm = () => {
    const [nick, setNick] = react_1.useState("");
    const [login, setLogin] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [email, setEmail] = react_1.useState("");
    const onUserSave = () => {
        console.log(nick);
        console.log(login);
        console.log(password);
        console.log(email);
        const user = {
            nick: nick,
            login: login,
            password: password,
            email: email,
            role: "loggedUser"
        };
        User_1.createUser(user)
            .then(({ status, data }) => {
            console.log("zwrotna data");
            console.log(data);
            if (status !== 201) {
                throw new Error('Error! User not saved');
            }
            // setTodos(data.todos)
        })
            .catch((err) => console.log(err));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RegisterForm_styles_1.StyledRegisterForm, null,
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Nick", style: { margin: 8 }, placeholder: "Please type in your nickname here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setNick(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Login", style: { margin: 8 }, placeholder: "Please type in your login here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setLogin(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Password", style: { margin: 8 }, placeholder: "Please type in your password here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setPassword(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Email", style: { margin: 8 }, placeholder: "Please type in your email here", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setEmail(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.LogicControls, null,
                react_1.default.createElement("div", null, "Have already account? Login"),
                react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onUserSave }, "Register")))));
};
exports.default = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map