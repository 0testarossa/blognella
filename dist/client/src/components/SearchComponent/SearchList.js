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
const Post_1 = require("../../APIRequests/Post");
const SearchList = (props) => {
    const [allPosts, setAllPosts] = react_1.useState([]);
    const fetchAllPosts = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => {
            const allMainPosts = posts.filter((post) => post.title === props.search || post.tags.includes(props.search));
            setAllPosts(allMainPosts);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllPosts();
    }, [props.search]);
    const getListItems = () => {
        return allPosts.map((post) => react_1.default.createElement(core_1.ListItem, { key: post._id },
            react_1.default.createElement(core_1.ListItemText, { primary: react_1.default.createElement(react_router_dom_1.Link, { to: {
                        pathname: `/post/${post._id}`,
                    } },
                    " ",
                    post.title,
                    " ") })));
    };
    return (allPosts.length === 0 ? react_1.default.createElement("div", null, "There is no post that meets the expected criteria") :
        react_1.default.createElement(core_1.List, null, getListItems()));
};
exports.default = SearchList;
//# sourceMappingURL=SearchList.js.map