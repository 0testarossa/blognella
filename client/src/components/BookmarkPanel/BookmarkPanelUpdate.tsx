import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { updateBookmark } from "../../APIRequests/Bookmark";
import { getPosts, PostProps } from "../../APIRequests/Post";

const BookmarkPanelUpdate = (props) => {
    const [postId, setPostId] = useState(props.bookmark.post[0]._id || "");
    const [allPosts, setAllPosts] = useState<PostProps[]>([]);
    const [bookmarkTitle, setBookmarkTitle] = useState(props.bookmark.title || "");

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
    }

    const getPostsTitles = () => {
        return allPosts.map((post) => <MenuItem  key={post._id} value={post._id}>{post.title}</MenuItem>)
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
            label="Bookmark title"
            style={{ margin: 8 }}
            placeholder="Please type in your bookmark title here"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            defaultValue={bookmarkTitle}
            onChange={(input) => setBookmarkTitle(input.target.value)}
            />
        <Button variant="contained" color="primary" onClick={onBookmarkSave}>
            Save Bookmark
        </Button>
        </>
    )
}

export default BookmarkPanelUpdate;