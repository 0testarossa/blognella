import React, { useState } from "react";
import { LinkElement, LoginRegisterContainer } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";
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
                <LinkElement><SearchComponent/></LinkElement>
                {availablePages.includes(props.pageName) && role === "admin" ? <LinkElement><Link to={"/panel/posts"}>Panel</Link></LinkElement> : <></>}
                { nick ? <LinkElement onClick={onLogout} ><Link to={"/"}>{lang === "en" ? "Logout" : "Wyloguj"} {nick}</Link></LinkElement> : 
                <LinkElement ><Link to={"/login"}>{lang === "en" ? "Login" : "Zaloguj"}</Link></LinkElement> }
                <LinkElement><Link to={"/register"}>{lang === "en" ? "Register" : "Zarejestruj"}</Link></LinkElement>
                <LinkElement onClick={changeLanguage}>{localStorage.getItem('blognellaLang') || "en"}</LinkElement>
            </LoginRegisterContainer>
            <DefaultViewTabs/>
        </>
    )
}

export default DefaultViewLinks;