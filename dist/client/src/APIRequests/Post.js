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
exports.deletePost = exports.createPost = exports.getPosts = void 0;
const axios_1 = __importDefault(require("axios"));
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield axios_1.default.get('/posts');
        return posts;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getPosts = getPosts;
const createPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedPost = yield axios_1.default.post(`/post`, post);
        return savedPost;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createPost = createPost;
const deletePost = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPost = yield axios_1.default.delete(`/post/${_id}`);
        return deletedPost;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=Post.js.map