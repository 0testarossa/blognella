"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Todo = ({ todo, updateTodo, deleteTodo }) => {
    const checkTodo = todo.status ? `line-through` : '';
    return (react_1.default.createElement("div", { className: 'Card' },
        react_1.default.createElement("div", { className: 'Card--text' },
            react_1.default.createElement("h1", { className: checkTodo }, todo.name),
            react_1.default.createElement("span", { className: checkTodo }, todo.description)),
        react_1.default.createElement("div", { className: 'Card--button' },
            react_1.default.createElement("button", { onClick: () => updateTodo(todo), className: todo.status ? `hide-button` : 'Card--button__done' }, "Complete"),
            react_1.default.createElement("button", { onClick: () => deleteTodo(todo._id), className: 'Card--button__delete' }, "Delete"))));
};
exports.default = Todo;
//# sourceMappingURL=TodoItem.js.map