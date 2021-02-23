"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.StyledPanelContent = exports.StyledMain = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledMain = styled_components_1.default.main `
    max-width: 930px;
    margin: 0rem auto 0rem auto;
    .MuiInputBase-input {
        color: ${props => props.inputColor};
    }
    /* background-color: #333333; */
`;
exports.StyledPanelContent = styled_components_1.default.div `
    /* width: 100%; */
    width: ${props => props.width};
    .MuiSvgIcon-root {
        color: ${props => props.iconColor}
    }
    a{
        text-decoration: underline !important;
    }
    .MuiFormControl-root label{
        color: ${props => props.iconColor};
    }
`;
exports.theme = {
    root: {
        default: "#292929",
        white: "#f9f9f9",
        purple: "#3d1340",
        red: "#580000",
    },
    page: {
        default: "#333333",
        white: "white",
        purple: "#602a67",
        red: "#7d0000",
    },
    bookmarks: {
        default: "#222222",
        white: "#e2c1d7",
        purple: "#431a52",
        red: "#320000",
    },
    text: {
        default: "white",
        white: "black",
        purple: "white",
        red: "white",
    },
    decoratedText: {
        default: "#00cccb",
        white: "#75176a",
        purple: "#ffeb00",
        red: "#d0de59",
    },
    comments: {
        default: "#303030",
        white: "#be64ab",
        purple: "#7d4085",
        // purple: "#fce8fd",
        red: "#610505",
    },
    inputText: {
        default: " #dfdfdf",
        white: "black",
        purple: "white",
        red: "white"
    }
};
//# sourceMappingURL=App.styles.js.map