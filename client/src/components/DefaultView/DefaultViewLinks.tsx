import React from "react";
import { LinkElement, LoginRegisterContainer, MainViewTabsContainer } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";

const DefaultViewLinks = () => {

    return (
        <>
            <LoginRegisterContainer>
                <LinkElement><Link to={"/login"}>Login</Link></LinkElement>
                <LinkElement><Link to={"/register"}>Register</Link></LinkElement>
            </LoginRegisterContainer>

            <MainViewTabsContainer>
                <LinkElement><Link to={"/"}>Home</Link></LinkElement>
                <LinkElement><Link to={"/"}>Home</Link></LinkElement>
            </MainViewTabsContainer>
        </>
    )
}

export default DefaultViewLinks;