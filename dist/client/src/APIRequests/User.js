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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield axios_1.default.get('/users');
        return users;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getUsers = getUsers;
const getUser = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield axios_1.default.get(`/user/${_id}`);
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getUser = getUser;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedUser = yield axios_1.default.post(`/user`, user);
        return savedUser;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createUser = createUser;
const updateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield axios_1.default.put(`/user/${user._id}`, user);
        return updatedUser;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield axios_1.default.delete(`/user/${_id}`);
        return deletedUser;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=User.js.map