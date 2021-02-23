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
    width: ${props => props.width}
`;
//# sourceMappingURL=MainView.styles.js.map