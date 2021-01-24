"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const SearchComponent = (props) => {
    const [searchValue, setSearchValue] = react_1.useState("");
    const lang = localStorage.getItem("blognellaLang");
    const onSearch = () => {
        props.history.push({
            pathname: '/search',
            state: { search: searchValue }
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TextField_1.default, { id: "standard-full-width", label: lang === "en" ? "Search" : "Wyszukaj", style: { margin: 8 }, placeholder: lang === "en" ? "Please type in tag or title here" : "Proszę wpisz etykietę lub tytuł", fullWidth: true, margin: "normal", InputLabelProps: {
                shrink: true,
            }, onChange: (input) => setSearchValue(input.target.value) }),
        react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onSearch }, lang === "en" ? "Search" : "Wyszukaj")));
};
exports.default = react_router_dom_1.withRouter(SearchComponent);
//# sourceMappingURL=SearchComponent.js.map