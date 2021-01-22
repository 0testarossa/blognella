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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DefaultView_styles_1 = require("../DefaultView/DefaultView.styles");
const react_router_dom_1 = require("react-router-dom");
const Bookmark_1 = require("../../APIRequests/Bookmark");
const DefaultViewTabs = () => {
    const [allBookmarks, setAllBookmarks] = react_1.useState([]);
    const fetchAllBookmarks = () => {
        Bookmark_1.getBookmarks()
            .then(({ data: { bookmarks } }) => { if (bookmarks.length !== allBookmarks.length)
            setAllBookmarks(bookmarks); })
            .catch((err) => console.log(err));
    };
    if (allBookmarks.length === 0)
        fetchAllBookmarks();
    const getAllLinks = () => {
        return allBookmarks.map((bookmark) => react_1.default.createElement(DefaultView_styles_1.LinkElement, { key: bookmark._id },
            react_1.default.createElement(react_router_dom_1.Link, { to: `/post/${bookmark.post[0]._id}` }, bookmark.title))) || [];
    };
    return (react_1.default.createElement(DefaultView_styles_1.MainViewTabsContainer, null,
        react_1.default.createElement(DefaultView_styles_1.LinkElement, null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        getAllLinks()));
};
exports.default = DefaultViewTabs;
//# sourceMappingURL=DefaultViewTabs.js.map