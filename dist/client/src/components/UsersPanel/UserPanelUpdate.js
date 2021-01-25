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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../APIRequests/User");
const UserPanel_styles_1 = require("./UserPanel.styles");
const allUsersRoles = ["loggedUser", "admin"];
const UserPanelUpdate = (props) => {
    const [nick, setNick] = react_1.useState(props.user.nick);
    const [login, setLogin] = react_1.useState(props.user.login);
    const [password, setPassword] = react_1.useState(props.user.password);
    const [role, setRole] = react_1.useState(props.user.role);
    const [email, setEmail] = react_1.useState(props.user.email);
    const lang = localStorage.getItem("blognellaLang");
    const handleUserRole = (event) => {
        setRole(event.target.value);
    };
    const onUserSave = () => {
        const user = {
            _id: props.user._id,
            nick: nick,
            login: login,
            password: password,
            role: role,
            email: email,
        };
        User_1.updateUser(user);
        props.history.push("/panel/users");
    };
    const getUsersRoles = () => {
        return allUsersRoles.map((role) => react_1.default.createElement(core_1.MenuItem, { key: role, value: role }, role));
    };
    return (react_1.default.createElement(UserPanel_styles_1.StyledPanel, null,
        react_1.default.createElement(core_1.TextField, { label: "Nick", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your nickname here" : "Proszę wpisz nick", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: nick, onChange: (input) => setNick(input.target.value) }),
        react_1.default.createElement(core_1.TextField, { label: "Login", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your login here" : "Proszę wpisz swój login", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: login, onChange: (input) => setLogin(input.target.value) }),
        react_1.default.createElement(core_1.TextField, { label: lang === "en" ? "Password" : "Hasło", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your password here" : "Proszę wpisz swoje hasło", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: password, onChange: (input) => setPassword(input.target.value) }),
        react_1.default.createElement(core_1.Select, { value: role, onChange: handleUserRole }, getUsersRoles()),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.TextField, { label: "Email", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your email here" : "Proszę wpisz swój email", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: email, onChange: (input) => setEmail(input.target.value) }),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onUserSave }, lang === "en" ? "Save User" : "Zapisz Użytkownika")));
};
exports.default = react_router_dom_1.withRouter(UserPanelUpdate);
//# sourceMappingURL=UserPanelUpdate.js.map