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
const Post_1 = require("../../APIRequests/Post");
const PostsPanelList = () => {
    const [allPosts, setAllPosts] = react_1.useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const fetchAllPosts = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => setAllPosts(posts))
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllPosts();
    }, []);
    const onPostDelete = (post) => {
        Post_1.deletePost(post._id || "")
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Post not deleted');
            }
            fetchAllPosts();
        })
            .catch((err) => console.log(err));
    };
    const getListItems = () => {
        return allPosts.map((post) => react_1.default.createElement(core_1.ListItem, { key: post._id },
            react_1.default.createElement(core_1.ListItemText, { primary: react_1.default.createElement(react_router_dom_1.Link, { to: {
                        pathname: `/panel/posts/${post._id}`,
                        // search: `?id=${post._id}`,
                        state: { myId: post._id }
                    } },
                    " ",
                    post.title,
                    " ") }),
            react_1.default.createElement(core_1.ListItemSecondaryAction, null,
                react_1.default.createElement(core_1.IconButton, { edge: "end", "aria-label": "delete", onClick: () => onPostDelete(post) },
                    react_1.default.createElement(Delete_1.default, null)))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.List, null, getListItems()),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/posts/add" }, lang === "en" ? "Add Post" : "Dodaj Wpis")));
};
exports.default = PostsPanelList;
//# sourceMappingURL=PostsPanelList.js.map