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
exports.deleteContent = exports.updateContent = exports.createContent = void 0;
const axios_1 = __importDefault(require("axios"));
const createContent = (content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedContent = yield axios_1.default.post(`/content`, content);
        return savedContent;
    }
    catch (error) {
        //   throw new Error(error)
        return { data: [], status: 403 };
    }
});
exports.createContent = createContent;
const updateContent = (content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedContent = yield axios_1.default.put(`/content/${content._id}`, content);
        return updatedContent;
    }
    catch (error) {
        //   throw new Error(error)
        return { data: [], status: 403 };
    }
});
exports.updateContent = updateContent;
const deleteContent = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedContent = yield axios_1.default.delete(`/content/${_id}`);
        return deletedContent;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteContent = deleteContent;
//# sourceMappingURL=Content.js.map