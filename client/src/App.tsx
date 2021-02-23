import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { getLayouts, LayoutProps } from './APIRequests/Layout';
import { getUser, UserProps } from './APIRequests/User';
import { StyledMain, StyledPanelContent, theme } from './App.styles';
import AdminPanel from './components/AdminPanel/AdminPanel';
import DefaultView from './components/DefaultView/DefaultView'
import { AboutSection, MainContentContainer, StyledAdminPanelContainer } from './components/DefaultView/DefaultView.styles';
import DefaultViewAbout from './components/DefaultView/DefaultViewAbout';

import './components/globalStyles/globalStyles.css';
import { MainViewContainer } from './components/MainView/MainView.styles';

export const availablePages = ["/register", "/login/forget", "/login", "/ui/post/:id", "/search", "/"]

const App: React.FC = (props:any) => {
  const [role, setRole] = useState("");
  const layout = localStorage.getItem('blognellaTheme') || "default";
  const mainWidth = localStorage.getItem('blognellaWidth') ? Number(localStorage.getItem('blognellaWidth')) : 80;

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

  const fetchLayout = () => {
      getLayouts()
      .then(({ data: { layouts } }: LayoutProps[] | any) => {
        const rootComponent = document.getElementById("root")
        if(layouts.length > 0) {
          if(rootComponent !== null) {
            rootComponent.style.minHeight = "100vh";
            rootComponent.style.backgroundColor = theme.root[layouts[0].name];
            localStorage.setItem('blognellaTheme', layouts[0].name);
            localStorage.setItem('blognellaWidth', layouts[0].mainWidth);
          }
        } 
      })
      .catch((err: Error) => console.log(err))
  }

  useEffect(() => {
    fetchUser()
    if(!localStorage.getItem('blognellaLang')) {
      localStorage.setItem('blognellaLang', "en");
    }
    fetchLayout()
  }, [props])


  if(props.match.path === "/login" &&  localStorage.getItem('blognellaId')) {props.history.push("/")};
  if(!availablePages.includes(props.match.path) && role !== "admin" && role) {props.history.push("/")};

  const Content = props.page;
  return (
    <StyledMain inputColor={theme.inputText[layout]} style={{backgroundColor: theme.page[layout], color: theme.text[layout]}}>
      <DefaultView pageName={props.match.path}/>
      <MainContentContainer>
        <MainViewContainer minWidth={availablePages.includes(props.match.path) ? `${mainWidth*9.3}px` : "unset"}
        width={availablePages.includes(props.match.path) ? `${mainWidth*9.3}px` : "100%"} isAbout={availablePages.includes(props.match.path)}>
          <StyledAdminPanelContainer color={theme.text[layout]} decoratedColor={theme.decoratedText[layout]}>

          {role && 
            <>
           {!availablePages.includes(props.match.path) ? <AdminPanel/> : <></>}
           <StyledPanelContent width="100%" iconColor={theme.text[layout]}><Content/></StyledPanelContent>
           </>
           }
          </StyledAdminPanelContainer>
        </MainViewContainer>
        {/* {availablePages.includes(props.match.path) ? <AboutSection width={`${100 - mainWidth}%`} color={theme.decoratedText[layout]}><DefaultViewAbout/></AboutSection> : <></>} */}
        {availablePages.includes(props.match.path) ? <AboutSection color={theme.decoratedText[layout]}><DefaultViewAbout/></AboutSection> : <></>}
      </MainContentContainer>


    </StyledMain>
  )
}

export default withRouter(App)
