"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContentContainer = exports.AboutSection = exports.MainViewTabsContainer = exports.LoginRegisterContainer = exports.LinkElement = exports.LinksContainer = exports.LogoContainer = exports.Logo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Logo = styled_components_1.default.div `
    font-family: Roboto;
    font-size: 3.5rem;
`;
exports.LogoContainer = styled_components_1.default.div `
    display:flex;
    justify-content: space-between;
    align-items: baseline;
`;
exports.LinksContainer = styled_components_1.default.div `
    display: flex;
`;
exports.LinkElement = styled_components_1.default.div `
    color: #ffffff;
    margin: 1rem;
`;
exports.LoginRegisterContainer = styled_components_1.default.div `
    display:flex;
    justify-content: flex-end;
`;
exports.MainViewTabsContainer = styled_components_1.default.div `
    display:flex;
    background-color:#292929;
`;
exports.AboutSection = styled_components_1.default.div `
    width:20%;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
`;
exports.MainContentContainer = styled_components_1.default.div `
    display: flex;
    min-height: 40rem;
    background-color: grey;
    justify-content: space-between;
    flex-grow: 1;
    padding-top: 1rem;
`;
//# sourceMappingURL=DefaultView.styles.js.map