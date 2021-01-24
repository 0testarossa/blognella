import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, UserProps } from './APIRequests/User';
import { StyledMain } from './App.styles';
import AdminPanel from './components/AdminPanel/AdminPanel';
import DefaultView from './components/DefaultView/DefaultView'
import { MainContentContainer, StyledAdminPanelContainer } from './components/DefaultView/DefaultView.styles';
import DefaultViewAbout from './components/DefaultView/DefaultViewAbout';

import './components/globalStyles/globalStyles.css';
import { MainViewContainer } from './components/MainView/MainView.styles';

export const availablePages = ["/register", "/login/forget", "/login", "/post/:id", "/search", "/"]

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
    if(!localStorage.getItem('blognellaLang')) {
      localStorage.setItem('blognellaLang', "en");
    }
  }, [props])


  if(props.match.path === "/login" &&  localStorage.getItem('blognellaId')) {props.history.push("/")};
  if(!availablePages.includes(props.match.path) && role !== "admin" && role) {props.history.push("/")};

  const Content = props.page;
  return (
    <StyledMain>
      <DefaultView pageName={props.match.path}/>
      <MainContentContainer>
        <MainViewContainer>
          <StyledAdminPanelContainer>

          {role && 
            <>
           {!availablePages.includes(props.match.path) ? <AdminPanel/> : <></>}
           <div><Content/></div>
           </>
           }
          </StyledAdminPanelContainer>
        </MainViewContainer>
        {availablePages.includes(props.match.path) ? <DefaultViewAbout/> : <></>}
      </MainContentContainer>


    </StyledMain>
  )
}

export default withRouter(App)
