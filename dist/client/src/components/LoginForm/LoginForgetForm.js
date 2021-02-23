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
const validatorMsg_1 = require("../validators/validatorMsg");
const userLoginValidator_1 = __importDefault(require("../fieldValidators/userLoginValidator"));
const userPasswordValidator_1 = __importDefault(require("../fieldValidators/userPasswordValidator"));
const userEmailValidator_1 = __importDefault(require("../fieldValidators/userEmailValidator"));
const fieldValidators_styles_1 = require("../fieldValidators/fieldValidators.styles");
const LoginForgetForm = (props) => {
    const [login, setLogin] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [email, setEmail] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const [errors, setErrors] = react_1.useState({ nick: "", login: "", password: "", email: "" });
    const [touched, setTouched] = react_1.useState({});
    const updateUserPassword = (user) => {
        const updatedSser = {
            _id: user._id,
            nick: user.nick,
            login: user.login,
            password: password.trim(),
            role: user.role,
            email: user.email,
        };
        User_1.updateUser(updatedSser);
    };
    const onSubmit = (event) => {
        event.persist();
        User_1.getUsers()
            .then(({ data: { users } }) => {
            const user = users.find((user) => user.login === login && user.email === email);
            if (user && errors.password === "") {
                updateUserPassword(user);
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            }
            else {
                setErrorMsg([lang === "en" ? "Invalid data" : "Niepoprawne dane"]);
                setAnchorEl(event.target);
            }
        })
            .catch((err) => console.log(err));
    };
    const onInputLogin = (value) => {
        touched.login && userLoginValidator_1.default({ login: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { login: data })); });
    };
    const onBlurLogin = (value) => {
        userLoginValidator_1.default({ login: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { login: data })); setTouched(Object.assign(Object.assign({}, touched), { login: true })); });
    };
    const onInputPassword = (value) => {
        touched.password && userPasswordValidator_1.default({ password: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { password: data })); });
    };
    const onBlurPassword = (value) => {
        userPasswordValidator_1.default({ password: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { password: data })); setTouched(Object.assign(Object.assign({}, touched), { password: true })); });
    };
    const onInputEmail = (value) => {
        touched.email && userEmailValidator_1.default({ email: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { email: data })); });
    };
    const onBlurEmail = (value) => {
        userEmailValidator_1.default({ email: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { email: data })); setTouched(Object.assign(Object.assign({}, touched), { email: true })); });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LoginForm_styles_1.StyledLoginForm, null,
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Email", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your email here" : "Proszę wpisz swój email", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setEmail(input.target.value), onInput: (input) => onInputEmail(input.target.value), onBlur: (input) => onBlurEmail(input.target.value) })),
            react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.email),
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Login", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your login here" : "Proszę wpisz swój login", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setLogin(input.target.value), onInput: (input) => onInputLogin(input.target.value), onBlur: (input) => onBlurLogin(input.target.value) })),
            react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.login),
            react_1.default.createElement(LoginForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: lang === "en" ? "New Password" : "Nowe hasło", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your new password here" : "Proszę wpisz swoje nowe hasło", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, type: "password", onChange: (input) => setPassword(input.target.value), onInput: (input) => onInputPassword(input.target.value), onBlur: (input) => onBlurPassword(input.target.value) })),
            react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.password),
            react_1.default.createElement(LoginForm_styles_1.LogicControls, null,
                react_1.default.createElement("div", null),
                react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onSubmit }, lang === "en" ? "Update Password" : "Aktualizuj Hasło"),
                react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    } },
                    react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg)))))));
};
exports.default = react_router_dom_1.withRouter(LoginForgetForm);
//# sourceMappingURL=LoginForgetForm.js.map