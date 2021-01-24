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
const Post_1 = require("../../APIRequests/Post");
const PostComponent_1 = __importDefault(require("../PostComponent/PostComponent"));
const MainView = () => {
    const [newestPost, setNewestPost] = react_1.useState();
    const fetchNewestPost = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => {
            const allMainPosts = posts.filter((post) => post.content[0].title === "Main");
            const mainViewPost = allMainPosts.reduce((mainPost, nextPost) => {
                if (JSON.stringify(mainPost) === JSON.stringify({}))
                    return nextPost;
                return mainPost.date < nextPost.date ? nextPost : mainPost;
            }, {});
            setNewestPost(mainViewPost);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchNewestPost();
    }, []);
    const shouldShowPost = () => {
        const customNewPost = newestPost || { content: [] };
        return customNewPost.content && customNewPost.content.length > 0;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, shouldShowPost() ? react_1.default.createElement(PostComponent_1.default, { post: newestPost, postChapters: [] }) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = MainView;
//# sourceMappingURL=MainView.js.map