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
exports.deleteLayout = exports.updateLayout = exports.addLayout = exports.getLayout = exports.getLayouts = void 0;
const layout_1 = __importDefault(require("../models/layout"));
const layoutClassValidator_1 = __importDefault(require("../classValidators/layoutClassValidator"));
const validation_1 = require("../classValidators/validation");
const getLayouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const layouts = yield layout_1.default.find();
        res.status(200).json({ layouts });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getLayouts = getLayouts;
const getLayout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const layout = yield layout_1.default.findOne({ _id: id });
        if (!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ layout });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.getLayout = getLayout;
const addLayout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const layout = new layout_1.default({
            name: body.name,
            mainWidth: body.mainWidth,
        });
        const allLayouts = yield layout_1.default.find();
        if (allLayouts.length > 0) {
            res.status(409).json({ data: "only one layout allowed" });
            return;
        }
        const layoutValidator = new layoutClassValidator_1.default(layout);
        yield validation_1.validateOrRejectExample(layoutValidator);
        const newLayout = yield layout.save();
        res.status(201).json({ layout: newLayout });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
});
exports.addLayout = addLayout;
const updateLayout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const layoutValidator = new layoutClassValidator_1.default(body);
        yield validation_1.validateOrRejectExample(layoutValidator);
        const layout = yield layout_1.default.findOne({ _id: id });
        if (!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const updateLayout = yield layout_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ layout: updateLayout });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
});
exports.updateLayout = updateLayout;
const deleteLayout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const layout = yield layout_1.default.findOne({ _id: id });
        if (!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const deletedLayout = yield layout_1.default.findByIdAndRemove(id);
        res.status(200).json({ layout: deletedLayout });
    }
    catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
});
exports.deleteLayout = deleteLayout;
//# sourceMappingURL=layoutController.js.map