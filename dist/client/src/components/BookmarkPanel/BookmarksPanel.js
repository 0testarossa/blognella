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
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const Bookmark_1 = require("../../APIRequests/Bookmark");
const react_router_dom_1 = require("react-router-dom");
const BookmarksPanel = () => {
    const [allBookmarks, setAllBookmarks] = react_1.useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const fetchAllBookmarks = () => {
        Bookmark_1.getBookmarks()
            .then(({ data: { bookmarks } }) => setAllBookmarks(bookmarks))
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchAllBookmarks();
    }, []);
    const onBookmarkDelete = (bookmark) => {
        Bookmark_1.deleteBookmark(bookmark._id || "")
            .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Bookmark not deleted');
            }
            fetchAllBookmarks();
        })
            .catch((err) => console.log(err));
    };
    const getListItems = () => {
        return allBookmarks.map((bookmark) => react_1.default.createElement(core_1.ListItem, { key: bookmark.title },
            react_1.default.createElement(core_1.ListItemText, { primary: react_1.default.createElement(react_router_dom_1.Link, { to: {
                        pathname: `/panel/bookmarks/${bookmark._id}`,
                        state: { myId: bookmark._id }
                    } },
                    " ",
                    bookmark.title,
                    " ") }),
            react_1.default.createElement(core_1.ListItemSecondaryAction, null,
                react_1.default.createElement(core_1.IconButton, { edge: "end", "aria-label": "delete", onClick: () => onBookmarkDelete(bookmark) },
                    react_1.default.createElement(Delete_1.default, null)))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.List, null, getListItems()),
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/panel/bookmarks/add" }, lang === "en" ? "Add Bookmark" : "Dodaj Zakładkę"))));
};
exports.default = BookmarksPanel;
//# sourceMappingURL=BookmarksPanel.js.map