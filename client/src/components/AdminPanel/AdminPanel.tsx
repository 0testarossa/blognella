import React from "react";
import { Link } from "react-router-dom";
import { CenteredSpan, StyledAdminPanel, StyledAdminPanelItem, StyledText } from "./AdminPanel.styles";
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PersonIcon from '@material-ui/icons/Person';
import NotesIcon from '@material-ui/icons/Notes';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const AdminPanel = () => {
    const lang = localStorage.getItem("blognellaLang");
    return (
        <StyledAdminPanel>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/posts"}><CenteredSpan><NotesIcon/>{lang === "en" ? "POSTS" : "WPISY"}</CenteredSpan></Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/bookmarks"}><CenteredSpan><BookmarksIcon/>{lang === "en" ? "BOOKMARKS" : "ZAKŁADKI"}</CenteredSpan></Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/users"}><CenteredSpan><PersonIcon/>{lang === "en" ? "USERS" : "UŻYTKOWNICY"}</CenteredSpan></Link>
            </StyledText></StyledAdminPanelItem>
            <StyledAdminPanelItem><StyledText>
                <Link to={"/panel/tags"}><CenteredSpan><LocalOfferIcon/>{lang === "en" ? "TAGS" : "ETYKIETY"}</CenteredSpan></Link>
            </StyledText></StyledAdminPanelItem>
        </StyledAdminPanel>
    )
}

export default AdminPanel;