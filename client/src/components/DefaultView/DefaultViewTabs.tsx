import React, { useState } from "react";
import { LinkElement, MainViewTabsContainer, MainViewTabsContainerWrapper } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";
import { BookmarkProps, getBookmarks } from "../../APIRequests/Bookmark";

const DefaultViewTabs = () => {
    const [allBookmarks, setAllBookmarks] = useState<BookmarkProps[]>([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllBookmarks = () => {
        getBookmarks()
        .then(({ data: { bookmarks } }: BookmarkProps[] | any) => {if(bookmarks.length !== allBookmarks.length) setAllBookmarks(bookmarks)})
        .catch((err: Error) => console.log(err))
    }

    if(allBookmarks.length === 0) fetchAllBookmarks();

    const getAllLinks = () => {
        return allBookmarks.map((bookmark) => <LinkElement key={bookmark._id}><Link to={bookmark.post.length > 0 ? `/ui/post/${bookmark.post[0]._id}` : '/'}>{bookmark.title}</Link></LinkElement>) || []
    }

    return (
        <MainViewTabsContainerWrapper>
            <MainViewTabsContainer>
                <LinkElement><Link to={"/"}>{lang === "en" ? "Home" : "Główna"}</Link></LinkElement>
                {getAllLinks()}
                {/* <LinkElement><Link to={"/"}>Home</Link></LinkElement> */}
            </MainViewTabsContainer>
        </MainViewTabsContainerWrapper>
    )
}

export default DefaultViewTabs;