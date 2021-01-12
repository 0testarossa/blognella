"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TodoItem_1 = __importDefault(require("./components/TodoItem"));
const AddTodo_1 = __importDefault(require("./components/AddTodo"));
const API_1 = require("./API");
const App = () => {
    const [todos, setTodos] = react_1.useState([]);
    react_1.useEffect(() => {
        fetchTodos();
    }, []);
    const fetchTodos = () => {
        API_1.getTodos()
            .then(({ data: { todos } }) => setTodos(todos))
            .catch((err) => console.log(err));
    };
    const handleSaveTodo = (e, formData) => {
        e.preventDefault();
        API_1.addTodo(formData)
            .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error('Error! Todo not saved');
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    const handleUpdateTodo = (todo) => {
        API_1.updateTodo(todo)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error('Error! Todo not updated');
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    const handleDeleteTodo = (_id) => {
        API_1.deleteTodo(_id)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error('Error! Todo not deleted');
            }
            setTodos(data.todos);
        })
            .catch((err) => console.log(err));
    };
    return (react_1.default.createElement("main", { className: 'App' },
        react_1.default.createElement("h1", null, "My Todos"),
        react_1.default.createElement(AddTodo_1.default, { saveTodo: handleSaveTodo }),
        todos.map((todo) => (react_1.default.createElement(TodoItem_1.default, { key: todo._id, updateTodo: handleUpdateTodo, deleteTodo: handleDeleteTodo, todo: todo })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map