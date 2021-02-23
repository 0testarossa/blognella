"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBottomPageContainer = exports.StyledAuthor = exports.StyledAuthorContainer = exports.StyledTags = exports.StyledTagsLabel = exports.StyledChapters = exports.StyledChaptersContainer = exports.StyledText = exports.StyledTitle = exports.StyledDate = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledDate = styled_components_1.default.div `
    font-size: 0.7rem;
    font-weight: bold;
`;
exports.StyledTitle = styled_components_1.default.div `
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem 0;
`;
exports.StyledText = styled_components_1.default.div `
    margin: 0.2rem 0;
    /* overflow: auto; */
    overflow: hidden;
    max-width: 46rem;
    word-break: break-all;
`;
exports.StyledChaptersContainer = styled_components_1.default.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
`;
exports.StyledChapters = styled_components_1.default.div `
    font-size: 1.6rem;
    margin-top: 1rem;
    
`;
exports.StyledTagsLabel = styled_components_1.default.div `
    margin-top: 0.5rem;
    font-weight: bold;
    color: ${props => props.color};
    /* color: #00cccb; */
`;
exports.StyledTags = styled_components_1.default.div `
    /* color: #00cccb; */
    color: ${props => props.color};
    font-size: 0.92rem;
    font-style: oblique;
    margin-bottom: 0.5rem;
`;
exports.StyledAuthorContainer = styled_components_1.default.div `
    margin-bottom: 2rem;
    font-size: 0.7rem;
    font-weight: bold;
`;
exports.StyledAuthor = styled_components_1.default.span `
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
`;
exports.StyledBottomPageContainer = styled_components_1.default.div `
    width: 100%;
    /* background-color: #303030; */
    padding: 0.2rem 0.75rem;
    border-bottom: 2px solid #404040;
    margin-top: 2rem;
`;
//# sourceMappingURL=PostComponent.styles.js.map