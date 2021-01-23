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
exports.deleteComment = exports.updateComment = exports.addComment = exports.getComment = exports.getComments = void 0;
const comment_1 = __importDefault(require("../models/comment"));
const commentClassValidator_1 = __importDefault(require("../classValidators/commentClassValidator"));
const validation_1 = require("../classValidators/validation");
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield comment_1.default.find();
        res.status(200).json({ comments });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getComments = getComments;
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const comment = yield comment_1.default.findOne({ _id: id });
        if (!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ comment });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getComment = getComment;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const comment = new comment_1.default({
            date: body.date,
            text: body.text,
            user: body.user
        });
        const commentValidator = new commentClassValidator_1.default(comment);
        yield validation_1.validateOrRejectExample(commentValidator);
        const newComment = yield comment.save();
        res.status(201).json({ comment: newComment });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.addComment = addComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const commentValidator = new commentClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(commentValidator);
        const comment = yield comment_1.default.findOne({ _id: id });
        if (!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updateComment = yield comment_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ comment: updateComment });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const comment = yield comment_1.default.findOne({ _id: id });
        if (!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const deletedComment = yield comment_1.default.findByIdAndRemove(id);
        res.status(200).json({ comment: deletedComment });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteComment = deleteComment;
//# sourceMappingURL=commentController.js.map