import React, { useState } from "react";
import { LinkElement, LoginRegisterContainer } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";
import { getUser, UserProps } from "../../APIRequests/User";
import DefaultViewTabs from "./DefaultViewTabs";
import { availablePages } from "../../App";

const DefaultViewLinks = (props) => {
    const [nick, setNick] = useState("");
    const [role, setRole] = useState("");

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

    return (
        <>
            <LoginRegisterContainer>
                {availablePages.includes(props.pageName) && role === "admin" ? <LinkElement><Link to={"/panel/posts"}>Panel</Link></LinkElement> : <></>}
                { nick ? <LinkElement onClick={onLogout} ><Link to={"/"}>Logout {nick}</Link></LinkElement> : 
                <LinkElement ><Link to={"/login"}>Login</Link></LinkElement> }
                <LinkElement><Link to={"/register"}>Register</Link></LinkElement>
            </LoginRegisterContainer>
            <DefaultViewTabs/>
        </>
    )
}

export default DefaultViewLinks;