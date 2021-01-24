import React from "react";
import { Link } from "react-router-dom";
import { StyledAdminPanel, StyledAdminPanelItem, StyledText } from "./AdminPanel.styles";

const AdminPanel = () => {
    const lang = localStorage.getItem("blognellaLang");
    return (
        <StyledAdminPanel>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/posts"}>{lang === "en" ? "POSTS" : "WPISY"}</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/bookmarks"}>{lang === "en" ? "BOOKMARKS" : "ZAKŁADKI"}</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/users"}>{lang === "en" ? "USERS" : "UŻYTKOWNICY"}</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/tags"}>{lang === "en" ? "TAGS" : "ETYKIETY"}</Link>
            </StyledText></StyledAdminPanelItem>
        </StyledAdminPanel>
    )
}

export default AdminPanel;