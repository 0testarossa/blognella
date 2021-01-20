"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_styles_1 = require("./App.styles");
const DefaultView_1 = __importDefault(require("./components/DefaultView/DefaultView"));
const DefaultView_styles_1 = require("./components/DefaultView/DefaultView.styles");
const DefaultViewAbout_1 = __importDefault(require("./components/DefaultView/DefaultViewAbout"));
// import TodoItem from './components/TodoItem'
// import AddTodo from './components/AddTodo'
// import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
// import LoginPage from './pages/loginPage'
// import RegisterForm from './components/RegisterForm/RegisterForm'
// import Content from './router';
require("./components/globalStyles/globalStyles.css");
const MainView_styles_1 = require("./components/MainView/MainView.styles");
const App = (props) => {
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
    // const Content = props.page;
    const Content = props.page;
    return (react_1.default.createElement(App_styles_1.StyledMain, null,
        react_1.default.createElement(DefaultView_1.default, null),
        react_1.default.createElement(DefaultView_styles_1.MainContentContainer, null,
            react_1.default.createElement(MainView_styles_1.MainViewContainer, null,
                react_1.default.createElement(Content, null)),
            react_1.default.createElement(DefaultViewAbout_1.default, null))));
};
exports.default = App;
//# sourceMappingURL=App.js.map