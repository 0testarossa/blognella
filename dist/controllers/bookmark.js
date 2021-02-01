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
exports.deleteBookmark = exports.updateBookmark = exports.addBookmark = exports.getBookmark = exports.getBookmarks = void 0;
const bookmark_1 = __importDefault(require("../models/bookmark"));
const bookmarkClassValidator_1 = __importDefault(require("../classValidators/bookmarkClassValidator"));
const validation_1 = require("../classValidators/validation");
const getBookmarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookmarks = yield bookmark_1.default.find().populate({
            path: 'post',
            model: 'Post',
            populate: {
                path: 'content',
                model: 'Content'
            }
        });
        res.status(200).json({ bookmarks });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getBookmarks = getBookmarks;
const getBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const bookmark = yield bookmark_1.default.findOne({ _id: id }).populate({
            path: 'post',
            model: 'Post',
            populate: {
                path: 'content',
                model: 'Content'
            }
        });
        if (!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ bookmark });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getBookmark = getBookmark;
const addBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const bookmark = new bookmark_1.default({
            title: body.title,
            post: body.post
        });
        const bookmarkValidator = new bookmarkClassValidator_1.default(bookmark);
        yield validation_1.validateOrRejectExample(bookmarkValidator);
        const newBookmark = yield bookmark.save();
        res.status(201).json({ bookmark: newBookmark });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
});
exports.addBookmark = addBookmark;
const updateBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const bookmarkValidator = new bookmarkClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(bookmarkValidator);
        const bookmark = yield bookmark_1.default.findOne({ _id: id });
        if (!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updateBookmark = yield bookmark_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ bookmark: updateBookmark });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
});
exports.updateBookmark = updateBookmark;
const deleteBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const bookmark = yield bookmark_1.default.findOne({ _id: id });
        if (!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const deletedBookmark = yield bookmark_1.default.findByIdAndRemove(id);
        res.status(200).json({ bookmark: deletedBookmark });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteBookmark = deleteBookmark;
//# sourceMappingURL=bookmark.js.map