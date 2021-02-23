"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAdminPanelContainer = exports.MainContentContainer = exports.AboutSection = exports.MainViewTabsContainerWrapper = exports.MainViewTabsContainer = exports.LoginRegisterContainer = exports.SearchElement = exports.LinkLoginElement = exports.LinkElement = exports.LinksContainer = exports.LogoContainer = exports.Logo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Logo = styled_components_1.default.div `
    font-family: Roboto;
    font-size: 3.5rem;
    padding: 22px 30px;
`;
exports.LogoContainer = styled_components_1.default.div `
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    /* background: #333333; */
`;
exports.LinksContainer = styled_components_1.default.div `
    display: flex;
`;
exports.LinkElement = styled_components_1.default.div `
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;

    a{
        text-decoration: underline;
    }

    &:hover{
        color: #ffffff;
        background-color: #000000;
        text-decoration: none;
    }

    &>a:hover{
        color: #ffffff;
        cursor: pointer;
    }
`;
exports.LinkLoginElement = styled_components_1.default.div `
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;
    height: fit-content;

    &:hover{
        color: #ffffff;
        background-color: #000000;
        text-decoration: none;
    }

    &>a:hover{
        color: #ffffff;
    }
`;
exports.SearchElement = styled_components_1.default.div `
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;
`;
exports.LoginRegisterContainer = styled_components_1.default.div `
    display:flex;
    justify-content: flex-end;
    /* background: #333333; */
    align-items: flex-end;
`;
exports.MainViewTabsContainer = styled_components_1.default.div `
    display:flex;
    /* background-color:#222222; */
    flex-wrap: wrap;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
    border-left: 0 solid #404040;
    border-right: 0 solid #404040;
    margin: 0 10px;
    padding: 10px 0;
`;
exports.MainViewTabsContainerWrapper = styled_components_1.default.div `
    width: 100%;
    /* background: #333333; */
`;
// export const AboutSection = styled.div<{width: string, color: string}>`
exports.AboutSection = styled_components_1.default.div `
    border-left: 1px solid #404040;
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    /* color: #00cccb; */
    overflow: auto;
    overflow-wrap: break-word;
    color: ${props => props.color}
`;
exports.MainContentContainer = styled_components_1.default.div `
    display: flex;
    min-height: 40rem;
    /* background-color: #333333; */
    justify-content: space-between;
    flex-grow: 1;
    padding-top: 1rem;
    padding-bottom: 2rem;
`;
exports.StyledAdminPanelContainer = styled_components_1.default.div `
    display:flex;
    height: 100%;
    /* flex-direction: column; */
    a{
        text-decoration:none;
        color: ${props => props.color};
    }
    a:hover{
        color: ${props => props.decoratedColor};
        /* color: #00cccb; */
    }
`;
//# sourceMappingURL=DefaultView.styles.js.map