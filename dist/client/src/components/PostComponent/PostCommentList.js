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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importStar(require("react"));
const Comment_1 = require("../../APIRequests/Comment");
const Post_1 = require("../../APIRequests/Post");
const User_1 = require("../../APIRequests/User");
const commentValidator_1 = __importDefault(require("../validators/commentValidator"));
const validatorMsg_1 = require("../validators/validatorMsg");
const PostComment_styles_1 = require("./PostComment.styles");
const PostCommentComponent_1 = __importDefault(require("./PostCommentComponent"));
const PostCommentList = (props) => {
    const [nick, setNick] = react_1.useState("Guest");
    const [role, setRole] = react_1.useState("guest");
    // const [user, setUser] = useState();
    const [newComment, setNewComment] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const fetchUser = (userId) => {
        User_1.getUser(userId)
            .then(({ data: { user } }) => {
            setNick(user.nick);
            setRole(user.role);
            // setUser(user);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        const userId = localStorage.getItem('blognellaId');
        if (userId) {
            fetchUser(userId);
        }
        else {
            setNick("Guest");
            setRole("guest");
        }
    }, [props]);
    const updatePostToEditComment = (commentId) => {
        const updatedComments = props.post.comment.filter((comment) => comment !== commentId);
        const post = {
            date: props.post.date,
            tags: props.post.tags,
            title: props.post.title,
            content: props.post.content[0]._id,
            _id: props.post._id,
            user: props.post.user,
            comment: updatedComments
        };
        Post_1.updatePost(post)
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Post not saved');
            }
        })
            .catch((err) => console.log(err));
    };
    const onNewCommentSave = (event) => {
        event.persist();
        const comment = {
            text: newComment.trim(),
            date: new Date().toISOString(),
            user: nick
        };
        commentValidator_1.default(comment, lang)
            .then((data) => {
            if (data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            }
            else {
                Comment_1.createComment(comment)
                    .then(({ data, status }) => {
                    if (status !== 403 && status !== 500) {
                        const post = {
                            date: props.post.date,
                            tags: props.post.tags,
                            title: props.post.title,
                            content: props.post.content[0]._id,
                            _id: props.post._id,
                            user: props.post.user,
                            comment: [...props.post.comment, data.comment._id]
                        };
                        Post_1.updatePost(post)
                            .then(({ data, status }) => {
                            if (status !== 403 && status !== 500) {
                                window.location.reload();
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
    const getComments = () => {
        return props.post.comment.map((comment) => react_1.default.createElement(PostCommentComponent_1.default, { key: comment._id, nick: nick, role: role, comment: comment, updatePostToDeleteComment: updatePostToEditComment }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        props.post.comment.length < 1 ? react_1.default.createElement("div", null, lang === "en" ? "No comments" : "Brak komentarzy") : getComments(),
        react_1.default.createElement(PostComment_styles_1.StyledComponentTextField, null,
            react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: lang === "en" ? "Add Comment" : "Dodaj komentarz", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your comment here" : "Proszę wpisz komentarz", fullWidth: true, margin: "normal", InputLabelProps: {
                    shrink: true,
                }, defaultValue: newComment, onChange: (input) => setNewComment(input.target.value) }),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onNewCommentSave }, lang === "en" ? "Add Comment" : "Dodaj Komentarz"),
            react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                } },
                react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg))))));
};
exports.default = PostCommentList;
//# sourceMappingURL=PostCommentList.js.map