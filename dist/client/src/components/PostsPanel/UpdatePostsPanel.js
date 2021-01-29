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
const tinymce_react_1 = require("@tinymce/tinymce-react");
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const core_1 = require("@material-ui/core");
const Content_1 = require("../../APIRequests/Content");
const Tag_1 = require("../../APIRequests/Tag");
const Post_1 = require("../../APIRequests/Post");
const react_date_picker_1 = __importDefault(require("react-date-picker"));
const react_router_dom_1 = require("react-router-dom");
const PostsPanel_styles_1 = require("./PostsPanel.styles");
const useStyles = core_1.makeStyles(() => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
const UpdatePostsPanel = (props) => {
    const classes = useStyles();
    const theme = core_1.useTheme();
    const [data, setData] = react_1.useState(props.post.content[0].text || "");
    const [title, setTitle] = react_1.useState(props.post.title || "");
    const [tags, setTags] = react_1.useState(props.post.tags || []);
    // const [contentId, setContentId] = useState(undefined)
    const [allTags, setAllTags] = react_1.useState([]);
    const [date, setDate] = react_1.useState(new Date());
    // const [date, setDate] = useState<any>(props.post.date);
    const [user, setUser] = react_1.useState(props.post.user);
    const lang = localStorage.getItem("blognellaLang");
    const handleEditorChange = (e) => {
        setData(e.target.getContent());
    };
    const onContentSave = () => {
        const content = {
            text: data,
            title: props.contentTitle,
            _id: props.post.content[0]._id
        };
        Content_1.updateContent(content)
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Content not saved');
            }
            // setContentId(data.content._id);
            onPostSave();
        });
    };
    const fetchAllTags = () => {
        Tag_1.getTags()
            .then(({ data: { tags } }) => setAllTags(tags.map(tag => tag.name)))
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllTags();
    }, []);
    const onPostSave = () => {
        const post = {
            date: date.toISOString(),
            tags: tags,
            title: title,
            content: props.post.content[0]._id,
            _id: props.post._id,
            user: user
        };
        Post_1.updatePost(post)
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Post not saved');
            }
        });
        props.history.push("/panel/posts");
    };
    const handleChange = (event) => {
        setTags(event.target.value);
    };
    return (react_1.default.createElement(PostsPanel_styles_1.StyledPanel, null,
        react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: lang === "en" ? "Title" : "Tytuł", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your post title here" : "Proszę wpisz tytuł wpisu", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: title, onChange: (input) => setTitle(input.target.value) }),
        react_1.default.createElement(tinymce_react_1.Editor, { initialValue: data, init: {
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }, onChange: (e) => handleEditorChange(e) }),
        react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Nick", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your nick here" : "Proszę wpisz nick", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, defaultValue: user, onChange: (input) => setUser(input.target.value) }),
        react_1.default.createElement("div", null, lang === "en" ? "Date of publication" : "Data publikacji"),
        react_1.default.createElement(react_date_picker_1.default, { onChange: (val) => setDate(val), value: date }),
        react_1.default.createElement("div", null, lang === "en" ? "Add tags to post" : "Dodaj etykiety do wpisu"),
        react_1.default.createElement(core_1.Select, { labelId: "demo-mutiple-chip-label", multiple: true, value: tags, onChange: handleChange, input: react_1.default.createElement(core_1.Input, { id: "select-multiple-chip" }), renderValue: (selected) => (react_1.default.createElement("div", { className: classes.chips }, selected.map((value) => (react_1.default.createElement(core_1.Chip, { key: value, label: value, className: classes.chip }))))), MenuProps: MenuProps }, allTags.map((name) => (react_1.default.createElement(core_1.MenuItem, { key: name, value: name, style: getStyles(name, tags, theme) }, name)))),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onContentSave }, lang === "en" ? "Save Post" : "Zapisz post")));
};
exports.default = react_router_dom_1.withRouter(UpdatePostsPanel);
//# sourceMappingURL=UpdatePostsPanel.js.map