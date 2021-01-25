import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { updateBookmark } from "../../APIRequests/Bookmark";
import { getPosts, PostProps } from "../../APIRequests/Post";
import { StyledPanel } from "./BookmarkPanel.Styles";

const BookmarkPanelUpdate = (props) => {
    const [postId, setPostId] = useState(props.bookmark.post.length > 0 ? props.bookmark.post[0]._id : "");
    const [allPosts, setAllPosts] = useState<PostProps[]>([]);
    const [bookmarkTitle, setBookmarkTitle] = useState(props.bookmark.title || "");
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => {
            const allMainPosts = posts.filter((post) => post.content[0].title === "Main");
            setAllPosts(allMainPosts);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const handlePostId = (event) => {
        setPostId(event.target.value);
    };

    const onBookmarkSave = () => {
        const bookmark = {
            _id: props.bookmark._id,
            title: bookmarkTitle,
            post: postId,
        }
        updateBookmark(bookmark)
        .then(({ status}) => {
            if (status !== 200) {
              throw new Error('Error! Bookmark not saved')
            }
          })
        props.history.push("/panel/bookmarks");
    }

    const getPostsTitles = () => {
        return allPosts.map((post) => <MenuItem  key={post._id} value={post._id}>{post.title}</MenuItem>)
    }

    return (
        <StyledPanel>
         <Select
          value={postId}
          onChange={handlePostId}
        >
            {getPostsTitles()}
        </Select>
        <div></div>
        <TextField
            label={lang === "en" ? "Bookmark title" : "Tytuł zakladki"}
            style={{ margin: 8 }}
            placeholder={lang === "en" ? "Please type in your bookmark title here" : "Proszę wpisz tytuł zakładki"}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            defaultValue={bookmarkTitle}
            onChange={(input) => setBookmarkTitle(input.target.value)}
            />
        <Button variant="contained" color="primary" onClick={onBookmarkSave}>
            {lang === "en" ? "Save Bookmark" : "Zapisz Zakładkę"}
        </Button>
        </StyledPanel>
    )
}

export default withRouter(BookmarkPanelUpdate);