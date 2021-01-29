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
const core_1 = require("@material-ui/core");
const Post_1 = require("../../APIRequests/Post");
const styled_components_1 = __importDefault(require("styled-components"));
const ChaptersList = (props) => {
    const [mainPosts, setMainPosts] = react_1.useState([]);
    const [postTitle, setPostTitle] = react_1.useState("");
    const FilterAndSetMainPosts = (posts) => {
        const mainPosts = posts.filter((post) => post.content[0].title === "Main");
        const mainTitles = mainPosts.map((post) => post.title);
        setMainPosts(mainTitles);
    };
    const fetchAllPosts = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => FilterAndSetMainPosts(posts))
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllPosts();
    }, []);
    react_1.useEffect(() => {
        if (postTitle === "" && props.storyTitle) {
            setPostTitle(props.storyTitle);
        }
    }, [props.storyTitle]);
    const handlePostTitle = (event) => {
        setPostTitle(event.target.value);
        props.setPostTitle(event.target.value);
    };
    const getTitleList = () => {
        return mainPosts.map((postTitle) => react_1.default.createElement(core_1.MenuItem, { key: postTitle, value: postTitle }, postTitle));
    };
    const StyledSelect = styled_components_1.default.div `
    .MuiInputBase-root{
        color: white;
      }
    `;
    return (react_1.default.createElement(StyledSelect, null,
        react_1.default.createElement(core_1.Select, { value: postTitle, onChange: handlePostTitle }, getTitleList())));
};
exports.default = ChaptersList;
//# sourceMappingURL=ChaptersList.js.map