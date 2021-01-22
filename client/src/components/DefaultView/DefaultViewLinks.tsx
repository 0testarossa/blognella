import React from "react";
import { LinkElement, LoginRegisterContainer, MainViewTabsContainer, MainViewTabsContainerWrapper } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";

const DefaultViewLinks = () => {

    return (
        <>
            <LoginRegisterContainer>
                <LinkElement><Link to={"/login"}>Login</Link></LinkElement>
                <LinkElement><Link to={"/register"}>Register</Link></LinkElement>
            </LoginRegisterContainer>

            <MainViewTabsContainerWrapper>
                <MainViewTabsContainer>
                    <LinkElement><Link to={"/"}>Home0</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home1</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home2</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home3</Link></LinkElement>
                    <LinkElement><Link to={"/"}>HomePięć</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home Sześć</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Powrót Home</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home Sequel</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home ostatnia nadzieja</Link></LinkElement>
                    <LinkElement><Link to={"/"}>The Home</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home -1</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home The Last Home</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home The Last Home 2</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home 14</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home - It's not Home D:</Link></LinkElement>
                    <LinkElement><Link to={"/"}>Home - Final Home</Link></LinkElement>
                </MainViewTabsContainer>
            </MainViewTabsContainerWrapper>
        </>
    )
}

export default DefaultViewLinks;