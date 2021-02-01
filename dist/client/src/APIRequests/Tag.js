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
exports.deleteTag = exports.createTag = exports.getTags = void 0;
const axios_1 = __importDefault(require("axios"));
const getTags = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield axios_1.default.get('/tags');
        return tags;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getTags = getTags;
const createTag = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saveTag = yield axios_1.default.post('/tag', tag);
        return saveTag;
    }
    catch (error) {
        //   throw new Error(error)
        if (error.response.status === 403) {
            return { data: error.response.data.errors, status: 403 };
        }
        else {
            return { data: {}, status: 500 };
        }
    }
});
exports.createTag = createTag;
const deleteTag = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTag = yield axios_1.default.delete(`/tag/${_id}`);
        return deletedTag;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=Tag.js.map