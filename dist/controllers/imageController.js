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
exports.deleteImage = exports.updateImage = exports.addImage = exports.getImage = exports.getImages = void 0;
const image_1 = __importDefault(require("../models/image"));
const imageClassValidator_1 = __importDefault(require("../classValidators/imageClassValidator"));
const validation_1 = require("../classValidators/validation");
const getImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield image_1.default.find();
        res.status(200).json({ images });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getImages = getImages;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const image = yield image_1.default.findOne({ _id: id });
        if (!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ image });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getImage = getImage;
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const image = new image_1.default({
            name: body.name,
            data: body.data,
        });
        const imageValidator = new imageClassValidator_1.default(image);
        yield validation_1.validateOrRejectExample(imageValidator);
        const newImage = yield image.save();
        res.status(201).json({ image: newImage });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.addImage = addImage;
const updateImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const imageValidator = new imageClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(imageValidator);
        const image = yield image_1.default.findOne({ _id: id });
        if (!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updateImage = yield image_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ image: updateImage });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.updateImage = updateImage;
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const image = yield image_1.default.findOne({ _id: id });
        if (!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const deletedImage = yield image_1.default.findByIdAndRemove(id);
        res.status(200).json({ image: deletedImage });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=imageController.js.map