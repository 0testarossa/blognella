import React, { useState } from "react";
import { LinkElement, MainViewTabsContainer } from "../DefaultView/DefaultView.styles";
import { Link } from "react-router-dom";
import { BookmarkProps, getBookmarks } from "../../APIRequests/Bookmark";

const DefaultViewTabs = () => {
    const [allBookmarks, setAllBookmarks] = useState<BookmarkProps[]>([]);

    const fetchAllBookmarks = () => {
        getBookmarks()
        .then(({ data: { bookmarks } }: BookmarkProps[] | any) => {if(bookmarks.length !== allBookmarks.length) setAllBookmarks(bookmarks)})
        .catch((err: Error) => console.log(err))
    }

    if(allBookmarks.length === 0) fetchAllBookmarks();

    const getAllLinks = () => {
        return allBookmarks.map((bookmark) => <LinkElement key={bookmark._id}><Link to={`/post/${bookmark.post[0]._id}`}>{bookmark.title}</Link></LinkElement>) || []
    }

    return (
        <MainViewTabsContainer>
            <LinkElement><Link to={"/"}>Home</Link></LinkElement>
            {getAllLinks()}
            {/* <LinkElement><Link to={"/"}>Home</Link></LinkElement> */}
        </MainViewTabsContainer>
    )
}

export default DefaultViewTabs;