import React, { useState } from "react";
import { LinkElement, LinkLoginElement, LoginRegisterContainer, SearchElement } from "../DefaultView/DefaultView.styles";
import { Link, withRouter } from "react-router-dom";
import { getUser, UserProps } from "../../APIRequests/User";
import DefaultViewTabs from "./DefaultViewTabs";
import { availablePages } from "../../App";
import SearchComponent from "../SearchComponent/SearchComponent";

const DefaultViewLinks = (props) => {
    const [nick, setNick] = useState("");
    const [role, setRole] = useState("");
    const lang = localStorage.getItem('blognellaLang');

    const fetchUser = () => {
        getUser(localStorage.getItem('blognellaId') || "")
        .then(({ data: { user } }: UserProps | any) => {
            if(!nick) {setNick(user.nick);}
            if(!role) {setRole(user.role);}
        })
        .catch((err: Error) => console.log(err))
    }

    const onLogout = () => {
        localStorage.removeItem('blognellaId');
        if(props.match.path === "/"){
            window.location.reload();
        } else {
            props.history.push('/');
        }
    }

    if(localStorage.getItem('blognellaId')) fetchUser();

    const changeLanguage = () => {
        const actualLang = localStorage.getItem('blognellaLang') || "en";
        actualLang === "en" ? localStorage.setItem("blognellaLang", "pl") : localStorage.setItem("blognellaLang", "en");
        window.location.reload();
    }

    return (
        <>
            <LoginRegisterContainer>
                <SearchElement><SearchComponent/></SearchElement>
                {availablePages.includes(props.pageName) && role === "admin" ? <LinkElement><Link to={"/panel/posts"}>Panel</Link></LinkElement> : <></>}
                { nick ? <LinkElement onClick={onLogout} ><Link to={"/"}>{lang === "en" ? "Logout" : "Wyloguj"} <span style={{fontWeight: "bold"}}>{nick}</span></Link></LinkElement> : 
                <LinkLoginElement ><Link to={"/login"}>{lang === "en" ? "Login" : "Zaloguj"}</Link></LinkLoginElement> } 
                { !nick ? <LinkLoginElement><Link to={"/register"}>{lang === "en" ? "Register" : "Zarejestruj"}</Link></LinkLoginElement> : <></>}
                <LinkElement onClick={changeLanguage}><a>{localStorage.getItem('blognellaLang') || "en"}</a></LinkElement>
            </LoginRegisterContainer>
            <DefaultViewTabs/>
        </>
    )
}

export default withRouter(DefaultViewLinks);