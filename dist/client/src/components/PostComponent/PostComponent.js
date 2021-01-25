"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PostCommentList_1 = __importDefault(require("./PostCommentList"));
const PostLinkComponent_1 = __importDefault(require("./PostLinkComponent"));
// import DatePicker from 'react-date-picker';
const PostComponent = (props) => {
    // const [value, onChange] = useState<any>(new Date());
    // const date = new Date('2018-05-18T04:00:00Z').toLocaleString();
    // const date = new Date(props.post.date).toUTCString();
    // const customoldData = new Date('2021-01-19T21:41:19.169Z').toDateString()
    // const customnewData = new Date('2021-02-19T21:41:19.169Z').toDateString()
    // console.log("old");
    // console.log(customoldData);
    // console.log("new");
    // console.log(customnewData);
    // const actualDate = new Date().toDateString()
    // console.log(customoldData > customnewData); //true
    // console.log(customoldData > actualDate)
    // const date = new Date(props.post.date).toDateString();
    const lang = localStorage.getItem("blognellaLang");
    const options = { weekday: 'long', year: "numeric", month: "long", day: "numeric", };
    const date = new Date(props.post.date).toLocaleDateString(lang === "en" ? "en-GB" : "pl-GB", options);
    // console.log(new Date(props.post.date).toLocaleDateString('en-GB', options));
    // console.log(new Date(props.post.date).toLocaleDateString('pl-GB', options));
    const getTags = () => {
        return props.post.tags.map((tag) => react_1.default.createElement("span", { key: tag }, tag));
    };
    const getPostChapters = () => {
        return props.postChapters.map((postChapter) => react_1.default.createElement("div", { key: postChapter._id },
            react_1.default.createElement(PostLinkComponent_1.default, { post: postChapter })));
    };
    return (props.post.date > new Date().toISOString() ? react_1.default.createElement("div", null,
        lang === "en" ? "It will be avaiable soon - " : "Dostępne wkrótce - ",
        date) :
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null, date),
            react_1.default.createElement("div", null, props.post.title),
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: props.post.content[0].text } }),
            react_1.default.createElement("div", null, lang === "en" ? "Chapters" : "Rozdziały"),
            getPostChapters(),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, lang === "en" ? "Tags: " : "Etykiety: "),
                getTags()),
            react_1.default.createElement("div", null,
                lang === "en" ? "Added by " : "Dodane przez ",
                props.post.user),
            react_1.default.createElement(PostCommentList_1.default, { post: props.post })));
};
exports.default = PostComponent;
//# sourceMappingURL=PostComponent.js.map