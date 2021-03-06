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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Comment_1 = require("../../APIRequests/Comment");
const PostCommentComponent = (props) => {
    const [isEditingMode, setIsEditingMode] = react_1.useState(false);
    const [commentText, setCommentText] = react_1.useState(props.comment.text);
    const lang = localStorage.getItem("blognellaLang");
    const canEdit = props.role !== "guest" && (props.comment.user === props.nick || props.role === "admin");
    const onEdit = () => {
        setIsEditingMode(!isEditingMode);
    };
    const onDelete = () => {
        props.updatePostToDeleteComment(props.comment._id);
        Comment_1.deleteComment(props.comment._id || "")
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Comment not deleted');
            }
        })
            .catch((err) => console.log(err));
    };
    const onSaveEditedComment = () => {
        setIsEditingMode(!isEditingMode);
        const comment = {
            _id: props.comment._id,
            date: props.comment.date,
            text: commentText,
            user: props.comment.user
        };
        Comment_1.updateComment(comment)
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Comment not saved');
            }
        })
            .catch((err) => console.log(err));
        window.location.reload();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            props.comment.user,
            " ",
            new Date(props.comment.date).toDateString(),
            canEdit ? react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { onClick: onEdit }, "Edit"),
                react_1.default.createElement("span", { onClick: onDelete }, "Delete")) : react_1.default.createElement(react_1.default.Fragment, null)),
        react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your comment here" : "Proszę wpisz komentarz", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, InputProps: {
                readOnly: !isEditingMode,
            }, defaultValue: commentText, onChange: (input) => setCommentText(input.target.value) }),
        isEditingMode ?
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onSaveEditedComment }, lang === "en" ? "Save Comment" : "Zapisz Komentarz") : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = react_router_dom_1.withRouter(PostCommentComponent);
//# sourceMappingURL=PostCommentComponent.js.map