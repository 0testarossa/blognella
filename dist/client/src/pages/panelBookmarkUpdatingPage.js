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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Bookmark_1 = require("../APIRequests/Bookmark");
const BookmarkPanelUpdate_1 = __importDefault(require("../components/BookmarkPanel/BookmarkPanelUpdate"));
const PanelBookmarkUpdatingPage = (props) => {
    const [editedBookmark, setEditedBookmark] = react_1.useState();
    const fetchEditedBookmark = () => {
        Bookmark_1.getBookmark(props.match.params.id)
            .then(({ data: { bookmark } }) => {
            setEditedBookmark(bookmark);
        })
            .catch((err) => console.log(err));
    };
    react_1.useEffect(() => {
        fetchEditedBookmark();
    }, []);
    return editedBookmark ? react_1.default.createElement(BookmarkPanelUpdate_1.default, { bookmark: editedBookmark }) : react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = react_router_dom_1.withRouter(PanelBookmarkUpdatingPage);
//# sourceMappingURL=panelBookmarkUpdatingPage.js.map