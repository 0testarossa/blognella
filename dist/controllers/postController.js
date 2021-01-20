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
exports.deletePost = exports.updatePost = exports.addPost = exports.getPost = exports.getPosts = void 0;
const post_1 = __importDefault(require("../models/post"));
const content_1 = __importDefault(require("../models/content"));
const postClassValidator_1 = __importDefault(require("../classValidators/postClassValidator"));
const validation_1 = require("../classValidators/validation");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.find().populate("content");
        res.status(200).json({ posts });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getPosts = getPosts;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const post = yield post_1.default.findOne({ _id: id }).populate("content");
        if (!post) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ post });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getPost = getPost;
const addPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const post = new post_1.default({
            date: body.date,
            tags: body.tags,
            title: body.title,
            content: body.content
        });
        const postValidator = new postClassValidator_1.default(post);
        yield validation_1.validateOrRejectExample(postValidator);
        const newPost = yield post.save();
        res.status(201).json({ post: newPost });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.addPost = addPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const postValidator = new postClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(postValidator);
        const post = yield post_1.default.findOne({ _id: id });
        if (!post) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updatePost = yield post_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ post: updatePost });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const post = yield post_1.default.findOne({ _id: id });
        if (!post) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        if (post.content.length > 0) {
            post.content.map((content) => __awaiter(void 0, void 0, void 0, function* () {
                const deletedContent = yield content_1.default.findByIdAndRemove(content._id);
            }));
        }
        const deletedPost = yield post_1.default.findByIdAndRemove(id);
        res.status(200).json({ post: deletedPost });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map