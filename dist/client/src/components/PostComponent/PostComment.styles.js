"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCommentButton = exports.StyledCommentAuthor = exports.StyledComponentTextField = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledComponentTextField = styled_components_1.default.div `
    label{
        color: white;
        font-weight: bold;
    }

    .MuiInputBase-input{
        /* color: #dfdfdf; */
    }
`;
exports.StyledCommentAuthor = styled_components_1.default.span `
    font-weight: bold;
`;
exports.StyledCommentButton = styled_components_1.default.span `
    margin-left: 1rem;
    color: ${props => props.color};
    font-weight: 600;
    /* color: #00cccb; */
    cursor: pointer;

    &:hover{
        color: white;
    }

    &:active{
        color: #dfdfdf;
    }
`;
//# sourceMappingURL=PostComment.styles.js.map