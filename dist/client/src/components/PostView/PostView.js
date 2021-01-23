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
const Post_1 = require("../../APIRequests/Post");
const PostComponent_1 = __importDefault(require("../PostComponent/PostComponent"));
const PostView = (props) => {
    const [post, setPost] = react_1.useState();
    const [postChapters, setPostChapters] = react_1.useState([]);
    const fetchPost = () => {
        Post_1.getPost(props.match.params.id)
            .then(({ data: { post } }) => {
            setPost(post);
            fetchAllPosts(post.title);
        })
            .catch((err) => console.log(err));
    };
    const fetchAllPosts = (storyTitle) => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => {
            const allPostChapters = posts.filter((post) => post.content[0].title === storyTitle);
            setPostChapters(allPostChapters || []);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchPost();
    }, [props]);
    return (react_1.default.createElement(react_1.default.Fragment, null, post ? react_1.default.createElement(PostComponent_1.default, { post: post, postChapters: postChapters }) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = react_router_dom_1.withRouter(PostView);
//# sourceMappingURL=PostView.js.map