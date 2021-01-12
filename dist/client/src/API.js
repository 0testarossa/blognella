"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const axios_1 = __importDefault(require("axios"));
//const baseUrl: string = 'http://localhost:4000'
const getTodos = async () => {
    try {
        const todos = await axios_1.default.get('/todos');
        return todos;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.getTodos = getTodos;
const addTodo = async (formData) => {
    try {
        console.log("daaataaa");
        console.log(formData);
        const todo = {
            name: formData.name,
            description: formData.description,
            status: false,
        };
        console.log(todo);
        const saveTodo = await axios_1.default.post('/add-todo', todo);
        return saveTodo;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.addTodo = addTodo;
const updateTodo = async (todo) => {
    try {
        const todoUpdate = {
            status: true,
        };
        const updatedTodo = await axios_1.default.put(`/edit-todo/${todo._id}`, todoUpdate);
        return updatedTodo;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (_id) => {
    try {
        const deletedTodo = await axios_1.default.delete(`/delete-todo/${_id}`);
        return deletedTodo;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=API.js.map