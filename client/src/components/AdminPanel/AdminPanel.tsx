import React from "react";
import { Link } from "react-router-dom";
import { StyledAdminPanel, StyledAdminPanelItem, StyledText } from "./AdminPanel.styles";

const AdminPanel = () => {
    return (
        <StyledAdminPanel>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/posts"}>POSTS</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/bookmarks"}>BOOKMARKS</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/users"}>USERS</Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/tags"}>TAGS</Link>
            </StyledText></StyledAdminPanelItem>
        </StyledAdminPanel>
    )
}

export default AdminPanel;