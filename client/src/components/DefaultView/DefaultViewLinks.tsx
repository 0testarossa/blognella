import React, { useState } from "react";
import { LinkElement, LoginRegisterContainer } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";
import { getUser, UserProps } from "../../APIRequests/User";
import DefaultViewTabs from "./DefaultViewTabs";

const DefaultViewLinks = () => {
    const [nick, setNick] = useState("");

    const fetchUser = () => {
        getUser(localStorage.getItem('blognellaId') || "")
        .then(({ data: { user } }: UserProps | any) => {
            if(!nick) {setNick(user.nick);}
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
                { nick ? <LinkElement onClick={onLogout} ><Link to={"/"}>Logout {nick}</Link></LinkElement> : 
                <LinkElement ><Link to={"/login"}>Login</Link></LinkElement> }
                <LinkElement><Link to={"/register"}>Register</Link></LinkElement>
            </LoginRegisterContainer>
            <DefaultViewTabs/>
        </>
    )
}

export default DefaultViewLinks;