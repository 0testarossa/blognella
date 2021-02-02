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
const react_router_dom_1 = require("react-router-dom");
const validatorMsg_1 = require("../validators/validatorMsg");
const userValidator_1 = __importDefault(require("../validators/userValidator"));
const RegisterForm = (props) => {
    const [nick, setNick] = react_1.useState("");
    const [login, setLogin] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [email, setEmail] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const onUserSave = (event) => {
        event.persist();
        const user = {
            nick: nick,
            login: login,
            password: password,
            email: email,
            role: "loggedUser"
        };
        userValidator_1.default(user, lang)
            .then((data) => {
            if (data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            }
            else {
                User_1.createUser(user)
                    .then(({ data, status }) => {
                    if (status !== 403 && status !== 500) {
                        props.history.push("/");
                    }
                    else if (status === 403) {
                        setErrorMsg(validatorMsg_1.getUniqueValidatorMsg(data, lang));
                        setAnchorEl(event.target);
                    }
                    else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"]);
                        setAnchorEl(event.target);
                    }
                });
            }
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RegisterForm_styles_1.StyledRegisterForm, null,
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Nick", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your nickname here" : "Proszę wpisz nick", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setNick(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Login", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your login here" : "Proszę wpisz swój login", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setLogin(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: lang === "en" ? "Password" : "Hasło", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your password here" : "Proszę wpisz swoje hasło", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setPassword(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.FormItem, null,
                react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Email", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your email here" : "Proszę wpisz swój email", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, onChange: (input) => setEmail(input.target.value) })),
            react_1.default.createElement(RegisterForm_styles_1.LogicControls, null,
                react_1.default.createElement("div", null,
                    lang === "en" ? "Have already account? " : "Masz już konto? ",
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, lang === "en" ? "Login" : "Zaloguj się")),
                react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onUserSave }, lang === "en" ? "Register" : "Zarejestruj się"),
                react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    } },
                    react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg)))))));
};
exports.default = react_router_dom_1.withRouter(RegisterForm);
//# sourceMappingURL=RegisterForm.js.map