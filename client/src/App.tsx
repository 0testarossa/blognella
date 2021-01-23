import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, UserProps } from './APIRequests/User';
import { StyledMain } from './App.styles';
import AdminPanel from './components/AdminPanel/AdminPanel';
import DefaultView from './components/DefaultView/DefaultView'
import { MainContentContainer, StyledAdminPanelContainer } from './components/DefaultView/DefaultView.styles';
import DefaultViewAbout from './components/DefaultView/DefaultViewAbout';
// import TodoItem from './components/TodoItem'
// import AddTodo from './components/AddTodo'
// import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
// import LoginPage from './pages/loginPage'
// import RegisterForm from './components/RegisterForm/RegisterForm'

// import Content from './router';

import './components/globalStyles/globalStyles.css';
import { MainViewContainer } from './components/MainView/MainView.styles';

export const availablePages = ["RegisterPage", "LoginForgetPage", "LoginPage", "PostPage", "MainViewPage"]

const App: React.FC = (props:any) => {
  const [role, setRole] = useState("");

  const fetchUser = () => {
      const userId = localStorage.getItem('blognellaId') || "";
      if(userId) {
        getUser(userId)
        .then(({ data: { user } }: UserProps | any) => {
            if(role !== user.role) {setRole(user.role);}
        })
        .catch((err: Error) => console.log(err))
      } else {
        setRole("guest");
      }
  }

  useEffect(() => {
    fetchUser()
  }, [props])


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
  if(props.page.name === "LoginPage" &&  localStorage.getItem('blognellaId')) {props.history.push("/")};
  if(!availablePages.includes(props.page.name) && role !== "admin" && role) {props.history.push("/")};
  const Content = props.page;
  return (
    <StyledMain>
      <DefaultView pageName={props.page.name}/>
      <MainContentContainer>
        <MainViewContainer>
          <StyledAdminPanelContainer>

          {role && 
            <>
           {!availablePages.includes(props.page.name) ? <AdminPanel/> : <></>}
           <div><Content/></div>
           </>
           }
          {/* {!availablePages.includes(props.page.name) ? <AdminPanel/> : <></>}
          <div><Content/></div> */}


          </StyledAdminPanelContainer>
        </MainViewContainer>
        {availablePages.includes(props.page.name) ? <DefaultViewAbout/> : <></>}
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
    </StyledMain>
  )
}

export default withRouter(App)
