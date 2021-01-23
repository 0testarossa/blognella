"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledText = exports.StyledAdminPanelItem = exports.StyledAdminPanel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledAdminPanel = styled_components_1.default.div `
  border-right: 1px solid black;
  margin-right: 1rem;
  height: 100%;
`;
exports.StyledAdminPanelItem = styled_components_1.default.div `
    padding-top: 1.8rem;
    padding-right: 0.5rem;
`;
exports.StyledText = styled_components_1.default.span `
    border-bottom: 1px solid black;
`;
//# sourceMappingURL=AdminPanel.styles.js.map