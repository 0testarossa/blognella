import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { BookmarkProps, deleteBookmark, getBookmarks } from "../../APIRequests/Bookmark";
import { Link } from "react-router-dom";

const BookmarksPanel = () => {
    const [allBookmarks, setAllBookmarks] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllBookmarks = () => {
        getBookmarks()
        .then(({ data: { bookmarks } }: BookmarkProps[] | any) => setAllBookmarks(bookmarks))
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllBookmarks()
    }, [])

      const onBookmarkDelete = (bookmark:BookmarkProps) => {
        deleteBookmark(bookmark._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Bookmark not deleted')
            }
            fetchAllBookmarks()
            })
            .catch((err) => console.log(err))
    }

      const getListItems = () => {
          return allBookmarks.map((bookmark:BookmarkProps) => 
          <ListItem key={bookmark.title}>
          <ListItemText
            primary={ <Link to={{
                pathname: `/panel/bookmarks/${bookmark._id}`,
                state: { myId: bookmark._id }
            }}> {bookmark.title} </Link> }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onBookmarkDelete(bookmark)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        );
      }



    return (
        <>
             <List>
              {getListItems()}
            </List>

            <div>

            <Link to={"/panel/bookmarks/add"}>{lang === "en" ? "Add Bookmark" : "Dodaj Zakładkę"}</Link>
            </div>
        </>
    )
}

export default BookmarksPanel;