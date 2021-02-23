"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicControls = exports.FormItem = exports.StyledRegisterForm = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledRegisterForm = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  /* background: #333333; */
  color: white;
  border: 2px solid white;
`;
exports.FormItem = styled_components_1.default.div `
    display: flex;
    flex-grow: 1;

    label{
      color: white;
    }

    .MuiInputBase-root{
      color: #dfdfdf;
    }
`;
exports.LogicControls = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    margin: 0rem 3rem;
    .MuiButton-containedPrimary{
      margin: 0 0.5rem;
    }
`;
//# sourceMappingURL=RegisterForm.styles.js.map