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
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../APIRequests/User");
const UserPanelUpdate_1 = __importDefault(require("../components/UsersPanel/UserPanelUpdate"));
const PanelUsersUpdatingPage = (props) => {
    const [editedUser, setEditedUser] = react_1.useState();
    const fetchEditedUser = () => {
        User_1.getUser(props.match.params.id)
            .then(({ data: { user } }) => {
            setEditedUser(user);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchEditedUser();
    }, []);
    return editedUser ? react_1.default.createElement(UserPanelUpdate_1.default, { user: editedUser }) : react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = react_router_dom_1.withRouter(PanelUsersUpdatingPage);
//# sourceMappingURL=panelUsersUpdatingPage.js.map