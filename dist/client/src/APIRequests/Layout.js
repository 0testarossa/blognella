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
exports.deleteLayout = exports.updateLayout = exports.createLayout = exports.getLayouts = void 0;
const axios_1 = __importDefault(require("axios"));
const getLayouts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const layouts = yield axios_1.default.get('/layouts');
        return layouts;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getLayouts = getLayouts;
const createLayout = (layout) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saveLayout = yield axios_1.default.post('/layout', layout);
        return saveLayout;
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
exports.createLayout = createLayout;
const updateLayout = (layout) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedLayout = yield axios_1.default.put(`/layout/${layout._id}`, layout);
        return updatedLayout;
    }
    catch (error) {
        //   throw new Error(error)
        if (error.response.status === 403) {
            return { data: error.response.data.keyValue, status: 403 };
        }
        else {
            return { data: {}, status: 500 };
        }
    }
});
exports.updateLayout = updateLayout;
const deleteLayout = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLayout = yield axios_1.default.delete(`/layout/${_id}`);
        return deletedLayout;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteLayout = deleteLayout;
//# sourceMappingURL=Layout.js.map