"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainViewContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MainViewContainer = styled_components_1.default.div `
    /* display: flex; */
    /* justify-content: space-between; */
    margin: 0rem 1rem;
    /* width:100%; */
    min-width: ${props => props.minWidth};
    width: ${props => props.width};

    @media (max-width: 825px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${80 * props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${80 * props.ratio}px)` : "unset"};
    }

    @media (max-width: 740px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${240 * props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${240 * props.ratio}px)` : "unset"};
    }

    @media (max-width: 585px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${350 * props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${350 * props.ratio}px)` : "unset"};
    }
`;
//# sourceMappingURL=MainView.styles.js.map