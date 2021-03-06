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
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../APIRequests/User");
const UsersPanel = (props) => {
    const [allUsers, setAllUsers] = react_1.useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const [actualAdminNick, setActualAdminNick] = react_1.useState("");
    const getBlognellaUser = () => {
        if (allUsers.length > 0) {
            const blognellaUser = localStorage.getItem("blognellaId");
            const actualAdmin = allUsers.find((user) => user._id === blognellaUser);
            if (actualAdmin) {
                setActualAdminNick(actualAdmin.nick || "");
            }
        }
    };
    const fetchAllUsers = () => {
        User_1.getUsers()
            .then(({ data: { users } }) => setAllUsers(users))
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        getBlognellaUser();
    }, [allUsers]);
    react_1.useEffect(() => {
        fetchAllUsers();
    }, [props]);
    const onUserDelete = (user) => {
        User_1.deleteUser(user._id || "")
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! User not deleted');
            }
            fetchAllUsers();
        })
            .catch((err) => console.log(err));
    };
    const getListItems = () => {
        return allUsers.map((user) => react_1.default.createElement(core_1.ListItem, { key: user.nick },
            react_1.default.createElement(core_1.ListItemText, { primary: react_1.default.createElement(react_router_dom_1.Link, { to: {
                        pathname: `/panel/users/${user._id}`,
                        state: { myId: user._id }
                    } },
                    " ",
                    user.nick,
                    " ") }),
            react_1.default.createElement(core_1.ListItemSecondaryAction, null, user.nick !== actualAdminNick ?
                react_1.default.createElement(core_1.IconButton, { edge: "end", "aria-label": "delete", onClick: () => onUserDelete(user) },
                    react_1.default.createElement(Delete_1.default, null))
                : react_1.default.createElement("div", null))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.List, null, getListItems()),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/users/add" }, lang === "en" ? "Add User" : "Dodaj użytkownika"))));
};
exports.default = react_router_dom_1.withRouter(UsersPanel);
//# sourceMappingURL=UsersPanel.js.map