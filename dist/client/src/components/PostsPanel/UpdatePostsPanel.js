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
    const [data, setData] = react_1.useState('<p>React is really <em>nice</em>!</p>');
    const [title, setTitle] = react_1.useState("");
    const [tags, setTags] = react_1.useState([]);
    const [contentId, setContentId] = react_1.useState(undefined);
    const [allTags, setAllTags] = react_1.useState([]);
    const handleEditorChange = (e) => {
        setData(e.target.getContent());
    };
    const onContentSave = () => {
        const content = {
            text: data,
            title: props.contentTitle
        };
        Content_1.createContent(content)
            .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error('Error! Todo not saved');
            }
            setContentId(data.content._id);
        });
    };
    react_1.useEffect(() => {
        if (contentId) {
            onPostSave();
            setContentId(undefined);
        }
    }, [contentId]);
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
            date: new Date(),
            tags: tags,
            title: title,
            content: contentId,
        };
        Post_1.createPost(post);
    };
    const handleChange = (event) => {
        setTags(event.target.value);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: "Title", style: { margin: 8 }, placeholder: "Please type in your login here", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setTitle(input.target.value) }),
        react_1.default.createElement(tinymce_react_1.Editor, { initialValue: data, init: {
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }, onChange: (e) => handleEditorChange(e) }),
        react_1.default.createElement("div", null, "Add tags to post"),
        react_1.default.createElement(core_1.Select, { labelId: "demo-mutiple-chip-label", multiple: true, value: tags, onChange: handleChange, input: react_1.default.createElement(core_1.Input, { id: "select-multiple-chip" }), renderValue: (selected) => (react_1.default.createElement("div", { className: classes.chips }, selected.map((value) => (react_1.default.createElement(core_1.Chip, { key: value, label: value, className: classes.chip }))))), MenuProps: MenuProps }, allTags.map((name) => (react_1.default.createElement(core_1.MenuItem, { key: name, value: name, style: getStyles(name, tags, theme) }, name)))),
        react_1.default.createElement("div", null),
        react_1.default.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: onContentSave }, "Save Post")));
};
exports.default = UpdatePostsPanel;
//# sourceMappingURL=UpdatePostsPanel.js.map