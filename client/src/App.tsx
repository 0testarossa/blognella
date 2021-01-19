import React from 'react'
import DefaultView from './components/DefaultView/DefaultView'
import { MainContentContainer } from './components/DefaultView/DefaultView.styles';
import DefaultViewAbout from './components/DefaultView/DefaultViewAbout';
// import TodoItem from './components/TodoItem'
// import AddTodo from './components/AddTodo'
// import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
// import LoginPage from './pages/loginPage'
// import RegisterForm from './components/RegisterForm/RegisterForm'

// import Content from './router';

import './components/globalStyles/globalStyles.css';
import { MainViewContainer } from './components/MainView/MainView.styles';

const App: React.FC = (props:any) => {
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
  return (
    <main style={{maxWidth: "824px", margin: "0rem auto 0rem auto"}}>
      {/* <LoginPage/> */}
      <DefaultView/>
      <MainContentContainer>
        <MainViewContainer>
          <Content/>
        </MainViewContainer>
        <DefaultViewAbout/>
      </MainContentContainer>

      

      {/* <RegisterForm/> */}

      {/* <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))} */}
    </main>
  )
}

export default App
