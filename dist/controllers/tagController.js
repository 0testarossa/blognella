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
exports.deleteTag = exports.updateTag = exports.addTag = exports.getTag = exports.getTags = void 0;
const tag_1 = __importDefault(require("../models/tag"));
const post_1 = __importDefault(require("../models/post"));
const tagClassValidator_1 = __importDefault(require("../classValidators/tagClassValidator"));
const validation_1 = require("../classValidators/validation");
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield tag_1.default.find();
        res.status(200).json({ tags });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getTags = getTags;
const getTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const tag = yield tag_1.default.findOne({ _id: id });
        if (!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ tag });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getTag = getTag;
const addTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const tag = new tag_1.default({
            name: body.name,
        });
        const tagValidator = new tagClassValidator_1.default(tag);
        yield validation_1.validateOrRejectExample(tagValidator);
        const newTag = yield tag.save();
        res.status(201).json({ tag: newTag });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.addTag = addTag;
const updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const tagValidator = new tagClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(tagValidator);
        const tag = yield tag_1.default.findOne({ _id: id });
        if (!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updateTag = yield tag_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ tag: updateTag });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.updateTag = updateTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const tag = yield tag_1.default.findOne({ _id: id });
        if (!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const posts = yield post_1.default.find();
        posts.map((post) => __awaiter(void 0, void 0, void 0, function* () {
            const tags = post.tags;
            const updatedTags = yield tags.filter((nextag) => {
                return nextag != tag.name;
            });
            if (tags.length != updatedTags.length) {
                const updatedPost = {
                    content: post.content,
                    _id: post._id,
                    date: post.date,
                    title: post.title,
                    tags: updatedTags
                };
                yield post_1.default.findByIdAndUpdate({ _id: post.id }, updatedPost);
            }
        }));
        const deletedTag = yield tag_1.default.findByIdAndRemove(id);
        res.status(200).json({ tag: deletedTag });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tagController.js.map