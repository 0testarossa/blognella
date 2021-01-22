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
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.getMainComments = exports.getComments = void 0;
const axios_1 = __importDefault(require("axios"));
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield axios_1.default.get('/comments');
        return comments;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getComments = getComments;
const getMainComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield axios_1.default.get('/commentsMain');
        return comments;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getMainComments = getMainComments;
const getComment = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield axios_1.default.get(`/comment/${_id}`);
        return comment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getComment = getComment;
const createComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedComment = yield axios_1.default.post(`/comment`, comment);
        return savedComment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createComment = createComment;
const updateComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedComment = yield axios_1.default.put(`/comment/${comment._id}`, comment);
        return updatedComment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateComment = updateComment;
const deleteComment = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedComment = yield axios_1.default.delete(`/comment/${_id}`);
        return deletedComment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteComment = deleteComment;
//# sourceMappingURL=Comment.js.map