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
const PostAboutComponent_1 = __importDefault(require("../PostComponent/PostAboutComponent"));
const DefaultViewAbout = () => {
    const [aboutPost, setAboutPost] = react_1.useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const fetchAllPosts = () => {
        Post_1.getPosts()
            .then(({ data: { posts } }) => {
            const allAboutPosts = posts.filter((post) => post.content[0].title === "About");
            setAboutPost(allAboutPosts);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        if (aboutPost.length === 0)
            fetchAllPosts();
    }, []);
    return (
    // <AboutSection>
    aboutPost.length > 0 ? react_1.default.createElement(PostAboutComponent_1.default, { post: aboutPost[0] }) : react_1.default.createElement("div", null, lang === "en" ? "There is no About post" : "Brak wpisu o mnie")
    // </AboutSection>
    );
};
exports.default = DefaultViewAbout;
//# sourceMappingURL=DefaultViewAbout.js.map