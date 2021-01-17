"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import TodoItem from './components/TodoItem'
// import AddTodo from './components/AddTodo'
// import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
// import LoginPage from './pages/loginPage'
const RegisterForm_1 = __importDefault(require("./components/RegisterForm/RegisterForm"));
const App = () => {
    //   const [todos, setTodos] = useState<ITodo[]>([])
    //   useEffect(() => {
    //     fetchTodos()
    //   }, [])
    //   const fetchTodos = (): void => {
    //     getTodos()
    //     .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    //     .catch((err: Error) => console.log(err))
    //   }
    //  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    //    e.preventDefault()
    //    addTodo(formData)
    //    .then(({ status, data }) => {
    //     if (status !== 201) {
    //       throw new Error('Error! Todo not saved')
    //     }
    //     setTodos(data.todos)
    //   })
    //   .catch((err) => console.log(err))
    // }
    //   const handleUpdateTodo = (todo: ITodo): void => {
    //     updateTodo(todo)
    //     .then(({ status, data }) => {
    //         if (status !== 200) {
    //           throw new Error('Error! Todo not updated')
    //         }
    //         setTodos(data.todos)
    //       })
    //       .catch((err) => console.log(err))
    //   }
    //   const handleDeleteTodo = (_id: string): void => {
    //     deleteTodo(_id)
    //     .then(({ status, data }) => {
    //         if (status !== 200) {
    //           throw new Error('Error! Todo not deleted')
    //         }
    //         setTodos(data.todos)
    //       })
    //       .catch((err) => console.log(err))
    //   }
    return (react_1.default.createElement("main", { style: { maxWidth: "824px", margin: "0rem auto 0rem auto" } },
        react_1.default.createElement(RegisterForm_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map