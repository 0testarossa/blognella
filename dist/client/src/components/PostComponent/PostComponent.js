"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PostCommentList_1 = __importDefault(require("./PostCommentList"));
const PostLinkComponent_1 = __importDefault(require("./PostLinkComponent"));
const PostComponent_styles_1 = require("./PostComponent.styles");
const App_styles_1 = require("../../App.styles");
// import DatePicker from 'react-date-picker';
const PostComponent = (props) => {
    const lang = localStorage.getItem("blognellaLang");
    const layout = localStorage.getItem("blognellaTheme") || "default";
    const options = { weekday: 'long', year: "numeric", month: "long", day: "numeric", };
    const date = new Date(props.post.date).toLocaleDateString(lang === "en" ? "en-GB" : "pl-GB", options);
    const getTags = () => {
        return props.post.tags.map((tag) => react_1.default.createElement("span", { key: tag, style: { marginRight: "1.2rem" } }, tag));
    };
    const getPostChapters = () => {
        return props.postChapters.map((postChapter) => react_1.default.createElement("div", { key: postChapter._id },
            react_1.default.createElement(PostLinkComponent_1.default, { post: postChapter })));
    };
    return (props.post.date > new Date().toISOString() ? react_1.default.createElement("div", null,
        lang === "en" ? "It will be avaiable soon - " : "Dostępne wkrótce - ",
        date) :
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PostComponent_styles_1.StyledDate, null, date),
            react_1.default.createElement(PostComponent_styles_1.StyledTitle, null, props.post.title),
            react_1.default.createElement(PostComponent_styles_1.StyledText, { dangerouslySetInnerHTML: { __html: props.post.content[0].text } }),
            react_1.default.createElement(PostComponent_styles_1.StyledChaptersContainer, null,
                props.postChapters.length > 0 ? react_1.default.createElement(PostComponent_styles_1.StyledChapters, null, lang === "en" ? "Chapters" : "Rozdziały") : react_1.default.createElement(react_1.default.Fragment, null),
                getPostChapters()),
            react_1.default.createElement(PostComponent_styles_1.StyledBottomPageContainer, { style: { backgroundColor: App_styles_1.theme.comments[layout] } },
                react_1.default.createElement(PostComponent_styles_1.StyledTags, { color: App_styles_1.theme.decoratedText[layout] },
                    react_1.default.createElement(PostComponent_styles_1.StyledTagsLabel, { color: App_styles_1.theme.decoratedText[layout] }, lang === "en" ? "Tags: " : "Etykiety: "),
                    getTags())),
            react_1.default.createElement(PostComponent_styles_1.StyledAuthorContainer, null,
                lang === "en" ? "Added by " : "Dodane przez ",
                react_1.default.createElement(PostComponent_styles_1.StyledAuthor, null, props.post.user)),
            react_1.default.createElement(PostComponent_styles_1.StyledBottomPageContainer, { style: { backgroundColor: App_styles_1.theme.comments[layout] } },
                react_1.default.createElement(PostCommentList_1.default, { post: props.post }))));
};
exports.default = PostComponent;
//# sourceMappingURL=PostComponent.js.map