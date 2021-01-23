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
exports.availablePages = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("./APIRequests/User");
const App_styles_1 = require("./App.styles");
const AdminPanel_1 = __importDefault(require("./components/AdminPanel/AdminPanel"));
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
exports.availablePages = ["RegisterPage", "LoginForgetPage", "LoginPage", "PostPage", "MainViewPage"];
const App = (props) => {
    const [role, setRole] = react_1.useState("");
    const fetchUser = () => {
        const userId = localStorage.getItem('blognellaId') || "";
        if (userId) {
            User_1.getUser(userId)
                .then(({ data: { user } }) => {
                if (role !== user.role) {
                    setRole(user.role);
                }
            })
                .catch((err) => console.log(err));
        }
        else {
            setRole("guest");
        }
    };
    react_1.useEffect(() => {
        fetchUser();
    }, [props]);
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
    // localStorage.getItem('blognellaId')
    if (props.page.name === "LoginPage" && localStorage.getItem('blognellaId')) {
        props.history.push("/");
    }
    ;
    if (!exports.availablePages.includes(props.page.name) && role !== "admin" && role) {
        props.history.push("/");
    }
    ;
    const Content = props.page;
    return (react_1.default.createElement(App_styles_1.StyledMain, null,
        react_1.default.createElement(DefaultView_1.default, { pageName: props.page.name }),
        react_1.default.createElement(DefaultView_styles_1.MainContentContainer, null,
            react_1.default.createElement(MainView_styles_1.MainViewContainer, null,
                react_1.default.createElement(DefaultView_styles_1.StyledAdminPanelContainer, null, role &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        !exports.availablePages.includes(props.page.name) ? react_1.default.createElement(AdminPanel_1.default, null) : react_1.default.createElement(react_1.default.Fragment, null),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(Content, null))))),
            exports.availablePages.includes(props.page.name) ? react_1.default.createElement(DefaultViewAbout_1.default, null) : react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.default = react_router_dom_1.withRouter(App);
//# sourceMappingURL=App.js.map