"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const SearchList_1 = __importDefault(require("../components/SearchComponent/SearchList"));
const SearchPage = (props) => {
    return (props.location.state && props.location.state.search) ? react_1.default.createElement(SearchList_1.default, { search: props.location.state.search }) : react_1.default.createElement("div", null, "Nothing to search");
};
exports.default = react_router_dom_1.withRouter(SearchPage);
//# sourceMappingURL=searchPage.js.map