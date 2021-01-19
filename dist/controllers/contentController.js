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
exports.deleteContent = exports.updateContent = exports.addContent = exports.getContent = exports.getContents = void 0;
const content_1 = __importDefault(require("../models/content"));
const contentClassValidator_1 = __importDefault(require("../classValidators/contentClassValidator"));
const validation_1 = require("../classValidators/validation");
const getContents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contents = yield content_1.default.find();
        res.status(200).json({ contents });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getContents = getContents;
const getContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const content = yield content_1.default.findOne({ _id: id });
        if (!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ content });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getContent = getContent;
const addContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const content = new content_1.default({
            text: body.text,
            title: body.title,
        });
        const contentValidator = new contentClassValidator_1.default(content);
        yield validation_1.validateOrRejectExample(contentValidator);
        const newContent = yield content.save();
        res.status(201).json({ content: newContent });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.addContent = addContent;
const updateContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const contentValidator = new contentClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(contentValidator);
        const content = yield content_1.default.findOne({ _id: id });
        if (!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updatedContent = yield content_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ content: updatedContent });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.updateContent = updateContent;
const deleteContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const content = yield content_1.default.findOne({ _id: id });
        if (!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const deletedContent = yield content_1.default.findByIdAndRemove(id);
        res.status(200).json({ content: deletedContent });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteContent = deleteContent;
//# sourceMappingURL=contentController.js.map