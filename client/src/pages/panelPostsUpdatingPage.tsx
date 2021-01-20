import { MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getPost, PostProps } from "../APIRequests/Post";
import ChaptersList from "../components/ChaptersList/ChaptersList";
import UpdatePostsPanel from "../components/PostsPanel/UpdatePostsPanel";

const PanelPostsUpdatingPage = (props) => {
    const [postType, setPostType] = useState("");
    const [storyTitle, setStoryTitle] = useState("");
    // const [postTitle, setPostTitle] = useState("");
    const [editedPost, setEditedPost] = useState<PostProps>();

    const handlePostType = (event) => {
        setPostType(event.target.value);
    };

    const fetchEditedPost = () => {
        getPost(props.match.params.id)
        .then(({ data: { post } }: PostProps | any) => {
            // setEditedPost(post)
            const postTitle = post.content[0].title;
            const customPostType = postTitle === "Main" || postTitle === "About" ? postTitle : "Chapter";
            setPostType(customPostType);
            customPostType === "Chapter" && setStoryTitle(postTitle);
            setEditedPost(post);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchEditedPost()
    }, [])

    return (
        <>
        <div>UPDATE</div>
         <Select
          value={postType}
          onChange={handlePostType}
        >
          <MenuItem value="Main">Main</MenuItem>
          <MenuItem value="Chapter">Chapter</MenuItem>
          <MenuItem value="About">About</MenuItem>
        </Select>
        <div></div>
        {postType === "Chapter" ? <ChaptersList storyTitle={storyTitle} setPostTitle={setStoryTitle}/> : <></>}

        {(postType === "Main" || postType === "About" || storyTitle) && editedPost ? 
        <UpdatePostsPanel contentTitle={storyTitle || postType} post={editedPost}/> : <></>}
        </>
    )
}

export default withRouter(PanelPostsUpdatingPage);
// export default PanelPostsUpdatingPage