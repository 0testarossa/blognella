import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { BookmarkProps, getBookmark } from "../APIRequests/Bookmark";
import BookmarkPanelUpdate from "../components/BookmarkPanel/BookmarkPanelUpdate";

const PanelBookmarkUpdatingPage = (props) => {
    const [editedBookmark, setEditedBookmark] = useState<BookmarkProps>();

    const fetchEditedBookmark = () => {
        getBookmark(props.match.params.id)
        .then(({ data: { bookmark } }: BookmarkProps | any) => {
            setEditedBookmark(bookmark);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchEditedBookmark()
    }, [])

    return editedBookmark ? <BookmarkPanelUpdate bookmark={editedBookmark}/> : <></>;
}

export default withRouter(PanelBookmarkUpdatingPage);