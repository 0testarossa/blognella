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


  // if(props.page.name === "LoginPage" &&  localStorage.getItem('blognellaId')) {props.history.push("/")};
  // if(!availablePages.includes(props.page.name) && role !== "admin" && role) {props.history.push("/")};
  const Content = props.page;
  return (
    <StyledMain>
      <DefaultView pageName={props.page.name}/>
      <MainContentContainer>
        <MainViewContainer>
          <StyledAdminPanelContainer>

          {/* {role && 
            <> */}
           {!availablePages.includes(props.page.name) ? <AdminPanel/> : <></>}
           <div><Content/></div>
           {/* </>
           } */}
          </StyledAdminPanelContainer>
        </MainViewContainer>
        {availablePages.includes(props.page.name) ? <DefaultViewAbout/> : <></>}
      </MainContentContainer>


    </StyledMain>
  )
}

export default withRouter(App)
