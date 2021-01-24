import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { createBookmark } from "../../APIRequests/Bookmark";
import { getPosts, PostProps } from "../../APIRequests/Post";

const BookmarkPanelAdd = (props) => {
    const [postId, setPostId] = useState("");
    const [allPosts, setAllPosts] = useState<PostProps[]>([]);
    const [bookmarkTitle, setBookmarkTitle] = useState("");
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
            title: bookmarkTitle,
            post: postId,
        }
        createBookmark(bookmark);
        props.history.push("/panel/bookmarks");
    }

    const getPostsTitles = () => {
        return allPosts.map((post) => <MenuItem key={post._id} value={post._id}>{post.title}</MenuItem>)
    }

    return (
        <>
         <Select
          value={postId}
          onChange={handlePostId}
        >
            {getPostsTitles()}
        </Select>
        <div></div>
        <TextField
            label={lang === "en" ? "Bookmark title" : "Tytuł zakładki"}
            style={{ margin: 8 }}
            placeholder={lang === "en" ? "Please type in your bookmark title here" : "Proszę wpisz tytuł zakładki"}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(input) => setBookmarkTitle(input.target.value)}
            />
        <Button variant="contained" color="primary" onClick={onBookmarkSave}>
            {lang === "en" ? "Save Bookmark" : "Zapisz Zakładkę"}
        </Button>
        </>
    )
}

export default withRouter(BookmarkPanelAdd);