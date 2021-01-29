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
const ChaptersList_1 = __importDefault(require("../components/ChaptersList/ChaptersList"));
const PostsPanel_1 = __importDefault(require("../components/PostsPanel/PostsPanel"));
const styled_components_1 = __importDefault(require("styled-components"));
const PanelPostsAddingPage = () => {
    const [postType, setPostType] = react_1.useState("");
    const [storyTitle, setStoryTitle] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const handlePostType = (event) => {
        setPostType(event.target.value);
    };
    const StyledSelect = styled_components_1.default.div `
    .MuiInputBase-root{
        color: white;
      }
    `;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSelect, null,
            react_1.default.createElement(core_1.Select, { value: postType, onChange: handlePostType },
                react_1.default.createElement(core_1.MenuItem, { value: "Main" }, lang === "en" ? "Main" : "Wpis"),
                react_1.default.createElement(core_1.MenuItem, { value: "Chapter" }, lang === "en" ? "Chapter" : "Rozdział"),
                react_1.default.createElement(core_1.MenuItem, { value: "About" }, lang === "en" ? "About" : "O mnie"))),
        react_1.default.createElement("div", null),
        postType === "Chapter" ? react_1.default.createElement(ChaptersList_1.default, { setPostTitle: setStoryTitle }) : react_1.default.createElement(react_1.default.Fragment, null),
        postType === "Main" || postType === "About" || storyTitle ? react_1.default.createElement(PostsPanel_1.default, { contentTitle: storyTitle || postType }) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = PanelPostsAddingPage;
//# sourceMappingURL=panelPostsAddingPage.js.map