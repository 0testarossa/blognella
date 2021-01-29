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
const Bookmark_1 = require("../../APIRequests/Bookmark");
const Post_1 = require("../../APIRequests/Post");
const BookmarkPanel_Styles_1 = require("./BookmarkPanel.Styles");
const BookmarkPanelUpdate = (props) => {
    const [postId, setPostId] = react_1.useState(props.bookmark.post.length > 0 ? props.bookmark.post[0]._id : "");
    const [allPosts, setAllPosts] = react_1.useState([]);
    const [bookmarkTitle, setBookmarkTitle] = react_1.useState(props.bookmark.title || "");
    const lang = localStorage.getItem("blognellaLang");
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
    const onBookmarkSave = () => {
        const bookmark = {
            _id: props.bookmark._id,
            title: bookmarkTitle,
            post: postId,
        };
        Bookmark_1.updateBookmark(bookmark)
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Bookmark not saved');
            }
        });
        props.history.push("/panel/bookmarks");
    };
    const getPostsTitles = () => {
        return allPosts.map((post) => react_1.default.createElement(core_1.MenuItem, { key: post._id, value: post._id }, post.title));
    };
    return (react_1.default.createElement(BookmarkPanel_Styles_1.StyledPanel, null,
        react_1.default.createElement(core_1.Select, { value: postId, onChange: handlePostId }, getPostsTitles()),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.TextField, { label: lang === "en" ? "Bookmark title" : "Tytuł zakladki", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your bookmark title here" : "Proszę wpisz tytuł zakładki", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: bookmarkTitle, onChange: (input) => setBookmarkTitle(input.target.value) }),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onBookmarkSave }, lang === "en" ? "Save Bookmark" : "Zapisz Zakładkę")));
};
exports.default = react_router_dom_1.withRouter(BookmarkPanelUpdate);
//# sourceMappingURL=BookmarkPanelUpdate.js.map