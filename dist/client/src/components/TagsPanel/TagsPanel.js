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
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importStar(require("react"));
const Tag_1 = require("../../APIRequests/Tag");
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const react_router_dom_1 = require("react-router-dom");
const TagsPanel_styled_1 = require("./TagsPanel.styled");
const validatorMsg_1 = require("../validators/validatorMsg");
const tagValidator_1 = __importDefault(require("../validators/tagValidator"));
const tagNameValidator_1 = __importDefault(require("../fieldValidators/tagNameValidator"));
const fieldValidators_styles_1 = require("../fieldValidators/fieldValidators.styles");
const TagsPanel = (props) => {
    const [tag, setTag] = react_1.useState("");
    const [allTags, setAllTags] = react_1.useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const [errors, setErrors] = react_1.useState({ name: "" });
    const [touched, setTouched] = react_1.useState({});
    const fetchAllTags = () => {
        Tag_1.getTags()
            .then(({ data: { tags } }) => setAllTags(tags))
            .catch((err) => console.log(err));
    };
    const onTagSave = (event) => {
        event.persist();
        tagValidator_1.default({ name: tag.trim() }, lang)
            .then((data) => {
            if (data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            }
            else {
                Tag_1.createTag({ name: tag })
                    .then(({ data, status }) => {
                    if (status !== 403 && status !== 500) {
                        fetchAllTags();
                        props.history.push("/panel/tags");
                    }
                    else if (status === 403) {
                        setErrorMsg(validatorMsg_1.getUniqueValidatorMsg(data, lang));
                        setAnchorEl(event.target);
                    }
                    else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"]);
                        setAnchorEl(event.target);
                    }
                });
            }
        });
        // createTag({name: tag})
        // .then(({ status }) => {
        //         if (status !== 201) {
        //           throw new Error('Error! Tag not saved')
        //         }
        //         fetchAllTags();
        // })
        // props.history.push("/panel/tags");
    };
    react_1.useEffect(() => {
        fetchAllTags();
    }, []);
    const onTagDelete = (tag) => {
        Tag_1.deleteTag(tag._id || "")
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Tag not deleted');
            }
            fetchAllTags();
        })
            .catch((err) => console.log(err));
    };
    const getListItems = () => {
        return allTags.map((tag) => react_1.default.createElement(core_1.ListItem, { key: tag.name },
            react_1.default.createElement(core_1.ListItemText, { primary: tag.name }),
            react_1.default.createElement(core_1.ListItemSecondaryAction, null,
                react_1.default.createElement(core_1.IconButton, { style: { color: "white" }, edge: "end", "aria-label": "delete", onClick: () => onTagDelete(tag) },
                    react_1.default.createElement(Delete_1.default, null)))));
    };
    const onInputName = (value) => {
        touched.name && tagNameValidator_1.default({ name: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { name: data })); });
    };
    const onBlurName = (value) => {
        tagNameValidator_1.default({ name: value.trim() }, lang).then((data) => { setErrors(Object.assign(Object.assign({}, errors), { name: data })); setTouched(Object.assign(Object.assign({}, touched), { name: true })); });
    };
    return (react_1.default.createElement(TagsPanel_styled_1.StyledTagsPanel, null,
        react_1.default.createElement(core_1.List, null, getListItems()),
        react_1.default.createElement("div", null,
            react_1.default.createElement(TextField_1.default, { label: lang === "en" ? "Tag" : "Etykieta", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in your tag here" : "Proszę wpisz etykietę", fullWidth: true, margin: "normal", InputLabelProps: {
                    shrink: true,
                }, onChange: (input) => setTag(input.target.value), onInput: (input) => onInputName(input.target.value), onBlur: (input) => onBlurName(input.target.value) }),
            react_1.default.createElement(fieldValidators_styles_1.StyledErrorMessage, null, errors.name),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onTagSave }, lang === "en" ? "Add Tag" : "Dodaj etykietę"),
            react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                } },
                react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg))))));
};
exports.default = react_router_dom_1.withRouter(TagsPanel);
//# sourceMappingURL=TagsPanel.js.map