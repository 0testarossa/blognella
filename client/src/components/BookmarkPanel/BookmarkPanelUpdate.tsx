import { Button, MenuItem, Popover, Select, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { updateBookmark } from "../../APIRequests/Bookmark";
import { getPosts, PostProps } from "../../APIRequests/Post";
import bookmarkValidate from "../validators/bookmarkValidator";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import { StyledPanel } from "./BookmarkPanel.Styles";

const BookmarkPanelUpdate = (props) => {
    const [postId, setPostId] = useState(props.bookmark.post.length > 0 ? props.bookmark.post[0]._id : "");
    const [allPosts, setAllPosts] = useState<PostProps[]>([]);
    const [bookmarkTitle, setBookmarkTitle] = useState(props.bookmark.title || "");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])

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

    const onBookmarkSave = (event) => {
        event.persist();
        const bookmark = {
            _id: props.bookmark._id,
            title: bookmarkTitle,
            post: postId,
        }
        bookmarkValidate(bookmark, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            } else {
                updateBookmark(bookmark)
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 500) {
                        props.history.push("/panel/bookmarks");
                    }
                    else if(status === 403) {
                        setErrorMsg(getUniqueValidatorMsg(data, lang))
                        setAnchorEl(event.target);
                    } else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                        setAnchorEl(event.target);
                    }
                });
            }
        });
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
        <Popover
                id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography>{getValidatorMsg(errorMsg)}</Typography>
        </Popover>
        </StyledPanel>
    )
}

export default withRouter(BookmarkPanelUpdate);