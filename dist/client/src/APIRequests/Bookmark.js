"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookmark = exports.updateBookmark = exports.createBookmark = exports.getBookmark = exports.getBookmarks = void 0;
const axios_1 = __importDefault(require("axios"));
const getBookmarks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookmarks = yield axios_1.default.get('/bookmarks');
        return bookmarks;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getBookmarks = getBookmarks;
const getBookmark = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookmark = yield axios_1.default.get(`/bookmark/${_id}`);
        return bookmark;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getBookmark = getBookmark;
const createBookmark = (bookmark) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedBookmark = yield axios_1.default.post(`/bookmark`, bookmark);
        return savedBookmark;
    }
    catch (error) {
        //   throw new Error(error)
        return { data: [], status: 403 };
    }
});
exports.createBookmark = createBookmark;
const updateBookmark = (bookmark) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBookmark = yield axios_1.default.put(`/bookmark/${bookmark._id}`, bookmark);
        return updatedBookmark;
    }
    catch (error) {
        //   throw new Error(error)
        return { data: [], status: 403 };
    }
});
exports.updateBookmark = updateBookmark;
const deleteBookmark = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBookmark = yield axios_1.default.delete(`/bookmark/${_id}`);
        return deletedBookmark;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteBookmark = deleteBookmark;
//# sourceMappingURL=Bookmark.js.map