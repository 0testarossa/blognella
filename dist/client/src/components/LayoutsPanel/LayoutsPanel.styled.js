"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCenterText = exports.StyledLayoutColorsContainer = exports.StyledLayoutsPanel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledLayoutsPanel = styled_components_1.default.div `
    label{
        color: white;
    }
    .MuiInputBase-input{
        /* color: #dfdfdf; */
    }

    .MuiListItem-root{
        &:hover {
            background-color: #292929;
            color: white !important;
        }
    }
    
    .MuiSlider-markActive {
        background-color: unset;
    }

    .MuiSlider-mark {
        background-color: unset;
    }

    .MuiSlider-markLabel {
        color: ${props => props.textColor};
        /* color: white; */
    }

    .MuiSlider-root {
        padding-top: 3.5rem;
    }
`;
exports.StyledLayoutColorsContainer = styled_components_1.default.div `
    width: 35rem;
    height: 2rem;
`;
exports.StyledCenterText = styled_components_1.default.div `
    /* color: white; */
    text-align: center;
    font-weight: 600;
    font-size: larger;
    padding: 1rem 0;
`;
//# sourceMappingURL=LayoutsPanel.styled.js.map