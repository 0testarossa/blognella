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
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../APIRequests/User");
const fieldValidators_styles_1 = require("../fieldValidators/fieldValidators.styles");
const userEmailValidator_1 = __importDefault(require("../fieldValidators/userEmailValidator"));
const userLoginValidator_1 = __importDefault(require("../fieldValidators/userLoginValidator"));
const userNickValidator_1 = __importDefault(require("../fieldValidators/userNickValidator"));
const userPasswordValidator_1 = __importDefault(require("../fieldValidators/userPasswordValidator"));
const userValidator_1 = __importDefault(require("../validators/userValidator"));
const validatorMsg_1 = require("../validators/validatorMsg");
const UserPanel_styles_1 = require("./UserPanel.styles");
const allUsersRoles = ["loggedUser", "admin"];
const UserPanelUpdate = (props) => {
    const [nick, setNick] = react_1.useState(props.user.nick);
    const [login, setLogin] = react_1.useState(props.user.login);
    const [password, setPassword] = react_1.useState(props.user.password);
    const [role, setRole] = react_1.useState(props.user.role);
    const [email, setEmail] = react_1.useState(props.user.email);
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const [errors, setErrors] = react_1.useState({ nick: "", login: "", password: "", email: "" });
    const [touched, setTouched] = react_1.useState({});
    const handleUserRole = (event) => {
        setRole(event.target.value);
    };
    const onUserSave = (event) => {
        event.persist();
        const user = {
            _id: props.user._id,
            nick: nick.trim(),
            login: login.trim(),
            password: password.trim(),
            role: role,
            email: email.trim(),
        };
        userValidator_1.default(user, lang)
            .then((data) => {
            if (data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            }
            else {
                User_1.updateUser(user)
                    .then(({ data, status }) => {
                    if (status !== 403 && status !== 500) {
                        props.history.push("/panel/users");
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
    const getUsersRoles = () => {
        return allUsersRoles.map((role) => react_1.default.createElement(core_1.MenuItem, { key: role, value: role }, role));
    };
    const onInputNick = (value) => {
        touched.nick && userNickValidator_1.default({ nick: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { nick: data })); });
    };
    const onBlurNick = (value) => {
        userNickValidator_1.default({ nick: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { nick: data })); setTouched(Object.assign(Object.assign({}, touched), { nick: true })); });
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
    return (react_1.default.createElement(UserPanel_styles_1.StyledPanel, null,
        react_1.default.createElement(core_1.TextField, { label: "Nick", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your nickname here" : "Proszę wpisz nick", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: nick, onChange: (input) => setNick(input.target.value), onInput: (input) => onInputNick(input.target.value), onBlur: (input) => onBlurNick(input.target.value) }),
        react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.nick),
        react_1.default.createElement(core_1.TextField, { label: "Login", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your login here" : "Proszę wpisz swój login", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: login, onChange: (input) => setLogin(input.target.value), onInput: (input) => onInputLogin(input.target.value), onBlur: (input) => onBlurLogin(input.target.value) }),
        react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.login),
        react_1.default.createElement(core_1.TextField, { label: lang === "en" ? "Password" : "Hasło", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your password here" : "Proszę wpisz swoje hasło", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, type: "password", defaultValue: password, onChange: (input) => setPassword(input.target.value), onInput: (input) => onInputPassword(input.target.value), onBlur: (input) => onBlurPassword(input.target.value) }),
        react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.password),
        react_1.default.createElement(core_1.Select, { value: role, onChange: handleUserRole }, getUsersRoles()),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.TextField, { label: "Email", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your email here" : "Proszę wpisz swój email", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: email, onChange: (input) => setEmail(input.target.value), onInput: (input) => onInputEmail(input.target.value), onBlur: (input) => onBlurEmail(input.target.value) }),
        react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.email),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onUserSave }, lang === "en" ? "Save User" : "Zapisz Użytkownika"),
        react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            } },
            react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg)))));
};
exports.default = react_router_dom_1.withRouter(UserPanelUpdate);
//# sourceMappingURL=UserPanelUpdate.js.map