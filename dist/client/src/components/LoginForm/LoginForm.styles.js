"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicControls = exports.FormItem = exports.StyledLoginForm = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledLoginForm = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  background: #8a8a8a;;
  color: white;
  border: 2px solid white;
`;
exports.FormItem = styled_components_1.default.div `
    display: flex;
    flex-grow: 1;
`;
exports.LogicControls = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    margin: 0rem 3rem;
`;
//# sourceMappingURL=LoginForm.styles.js.map