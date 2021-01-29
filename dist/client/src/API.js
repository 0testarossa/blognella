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
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const axios_1 = __importDefault(require("axios"));
//const baseUrl: string = 'http://localhost:4000'
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield axios_1.default.get('/todos');
        return todos;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getTodos = getTodos;
const addTodo = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("daaataaa");
        console.log(formData);
        const todo = {
            name: formData.name,
            description: formData.description,
            status: false,
        };
        console.log(todo);
        const saveTodo = yield axios_1.default.post('/add-todo', todo);
        return saveTodo;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.addTodo = addTodo;
const updateTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoUpdate = {
            status: true,
        };
        const updatedTodo = yield axios_1.default.put(`/edit-todo/${todo._id}`, todoUpdate);
        return updatedTodo;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield axios_1.default.delete(`/delete-todo/${_id}`);
        return deletedTodo;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=API.js.map