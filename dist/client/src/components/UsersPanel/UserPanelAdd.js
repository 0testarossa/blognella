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
const User_1 = require("../../APIRequests/User");
const allUsersRoles = ["loggedUser", "admin"];
const UserPanelAdd = () => {
    const [nick, setNick] = react_1.useState("");
    const [login, setLogin] = react_1.useState("");
    const [password, setPassword] = react_1.useState("");
    const [role, setRole] = react_1.useState("");
    const [email, setEmail] = react_1.useState("");
    const handleUserRole = (event) => {
        setRole(event.target.value);
    };
    const onUserSave = () => {
        const user = {
            nick: nick,
            login: login,
            password: password,
            role: role,
            email: email,
        };
        User_1.createUser(user);
    };
    const getUsersRoles = () => {
        return allUsersRoles.map((role) => react_1.default.createElement(core_1.MenuItem, { key: role, value: role }, role));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.TextField, { label: "Nick", style: { margin: 8 }, placeholder: "Please type in your nick here", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setNick(input.target.value) }),
        react_1.default.createElement(core_1.TextField, { label: "Login", style: { margin: 8 }, placeholder: "Please type in your login here", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setLogin(input.target.value) }),
        react_1.default.createElement(core_1.TextField, { label: "Password", style: { margin: 8 }, placeholder: "Please type in your password here", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setPassword(input.target.value) }),
        react_1.default.createElement(core_1.Select, { value: role, onChange: handleUserRole }, getUsersRoles()),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.TextField, { label: "Email", style: { margin: 8 }, placeholder: "Please type in your email here", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setEmail(input.target.value) }),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onUserSave }, "Save User")));
};
exports.default = UserPanelAdd;
//# sourceMappingURL=UserPanelAdd.js.map