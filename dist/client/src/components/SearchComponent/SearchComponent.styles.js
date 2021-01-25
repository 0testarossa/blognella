"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSearch = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledSearch = styled_components_1.default.div `
    label{
        color: white;
    }
    .MuiInputBase-input{
        color: #dfdfdf;
    }
    button{
        height: 30px;
        margin-top: 25px;
    }
    
    display: flex;
    flex-direction: row;
`;
//# sourceMappingURL=SearchComponent.styles.js.map