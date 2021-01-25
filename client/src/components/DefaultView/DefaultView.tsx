import React from "react";
import { LinksContainer, Logo, LogoContainer } from "./DefaultView.styles";
import DefaultViewLinks from "./DefaultViewLinks";
// import { LinksContainer, Logo, LogoContainer } from "./DefaultView.styles";

const DefaultView = (props) => {
    return (
        <>
        <LogoContainer>
            <Logo>Kiranella</Logo>
            <LinksContainer>
                    <div>
                    {/* <LinkElement><Link color="white" to={"/login"}>Login</Link></LinkElement>
                    <LinkElement><Link to={"/register"}>Register</Link></LinkElement> */}
                    </div>
            </LinksContainer>
        </LogoContainer>
        <DefaultViewLinks {...props}/>
        </>
    )
}

export default DefaultView;