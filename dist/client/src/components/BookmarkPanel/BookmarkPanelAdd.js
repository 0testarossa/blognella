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
const styled_components_1 = __importDefault(require("styled-components"));
const Bookmark_1 = require("../../APIRequests/Bookmark");
const Post_1 = require("../../APIRequests/Post");
const bookmarkTitleValidator_1 = __importDefault(require("../fieldValidators/bookmarkTitleValidator"));
const fieldValidators_styles_1 = require("../fieldValidators/fieldValidators.styles");
const bookmarkValidator_1 = __importDefault(require("../validators/bookmarkValidator"));
const validatorMsg_1 = require("../validators/validatorMsg");
const BookmarkPanel_Styles_1 = require("./BookmarkPanel.Styles");
const BookmarkPanelAdd = (props) => {
    const [postId, setPostId] = react_1.useState("");
    const [allPosts, setAllPosts] = react_1.useState([]);
    const [bookmarkTitle, setBookmarkTitle] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const [errors, setErrors] = react_1.useState({ title: "" });
    const [touched, setTouched] = react_1.useState({});
    const fetchAllPosts = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => {
            const allMainPosts = posts.filter((post) => post.content[0].title === "Main");
            setAllPosts(allMainPosts);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllPosts();
    }, []);
    const handlePostId = (event) => {
        setPostId(event.target.value);
    };
    const onBookmarkSave = (event) => {
        event.persist();
        const bookmark = {
            title: bookmarkTitle.trim(),
            post: postId,
        };
        bookmarkValidator_1.default(bookmark, lang)
            .then((data) => {
            if (data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            }
            else {
                Bookmark_1.createBookmark(bookmark)
                    .then(({ data, status }) => {
                    if (status !== 403 && status !== 500) {
                        props.history.push("/panel/bookmarks");
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
    const getPostsTitles = () => {
        return allPosts.map((post) => react_1.default.createElement(core_1.MenuItem, { key: post._id, value: post._id }, post.title));
    };
    const StyledSelect = styled_components_1.default.div `
    .MuiInputBase-root{
        color: white;
      }
    `;
    const onInputTitle = (value) => {
        touched.title && bookmarkTitleValidator_1.default({ title: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { title: data })); });
    };
    const onBlurTitle = (value) => {
        bookmarkTitleValidator_1.default({ title: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { title: data })); setTouched(Object.assign(Object.assign({}, touched), { title: true })); });
    };
    return (react_1.default.createElement(BookmarkPanel_Styles_1.StyledPanel, null,
        react_1.default.createElement(StyledSelect, null,
            react_1.default.createElement(core_1.Select, { value: postId, onChange: handlePostId }, getPostsTitles())),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.TextField, { label: lang === "en" ? "Bookmark title" : "Tytuł zakładki", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your bookmark title here" : "Proszę wpisz tytuł zakładki", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setBookmarkTitle(input.target.value), onInput: (input) => onInputTitle(input.target.value), onBlur: (input) => onBlurTitle(input.target.value) }),
        react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.title),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onBookmarkSave }, lang === "en" ? "Save Bookmark" : "Zapisz Zakładkę"),
        react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            } },
            react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg)))));
};
exports.default = react_router_dom_1.withRouter(BookmarkPanelAdd);
//# sourceMappingURL=BookmarkPanelAdd.js.map