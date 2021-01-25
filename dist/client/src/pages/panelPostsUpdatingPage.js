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
const Post_1 = require("../APIRequests/Post");
const ChaptersList_1 = __importDefault(require("../components/ChaptersList/ChaptersList"));
const UpdatePostsPanel_1 = __importDefault(require("../components/PostsPanel/UpdatePostsPanel"));
const PanelPostsUpdatingPage = (props) => {
    const [postType, setPostType] = react_1.useState("");
    const [storyTitle, setStoryTitle] = react_1.useState("");
    const [editedPost, setEditedPost] = react_1.useState();
    const lang = localStorage.getItem("blognellaLang");
    const fetchEditedPost = () => {
        Post_1.getPost(props.match.params.id)
            .then(({ data: { post } }) => {
            const postTitle = post.content[0].title;
            const customPostType = postTitle === "Main" || postTitle === "About" ? postTitle : "Chapter";
            setPostType(customPostType);
            customPostType === "Chapter" && setStoryTitle(postTitle);
            setEditedPost(post);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchEditedPost();
    }, []);
    const contentTitle = postType === "Main" || postType === "About" ? postType : storyTitle;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null, postType === "Main" ? (lang === "en" ? "STORY" : "WPIS") : postType === "About" ? (lang === "en" ? "ABOUT" : "O MNIE") : (lang === "en" ? "CHAPTER" : "ROZDZIAŁ")),
        postType === "Chapter" ? react_1.default.createElement(ChaptersList_1.default, { storyTitle: storyTitle, setPostTitle: setStoryTitle }) : react_1.default.createElement(react_1.default.Fragment, null),
        (postType === "Main" || postType === "About" || storyTitle) && editedPost ?
            react_1.default.createElement(UpdatePostsPanel_1.default, { contentTitle: contentTitle, post: editedPost }) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = react_router_dom_1.withRouter(PanelPostsUpdatingPage);
// export default PanelPostsUpdatingPage
//# sourceMappingURL=panelPostsUpdatingPage.js.map