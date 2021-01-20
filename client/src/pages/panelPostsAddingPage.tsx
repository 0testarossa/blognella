import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import ChaptersList from "../components/ChaptersList/ChaptersList";
import PostsPanel from "../components/PostsPanel/PostsPanel";

const PanelPostsAddingPage = () => {
    const [postType, setPostType] = useState("");
    const [storyTitle, setStoryTitle] = useState("");

    const handlePostType = (event) => {
        setPostType(event.target.value);
    };

    return (
        <>
         <Select
          value={postType}
          onChange={handlePostType}
        >
          <MenuItem value="Main">Main</MenuItem>
          <MenuItem value="Chapter">Chapter</MenuItem>
          <MenuItem value="About">About</MenuItem>
        </Select>
        <div></div>
        {postType === "Chapter" ? <ChaptersList setPostTitle={setStoryTitle}/> : <></>}

        {postType === "Main" || postType === "About" || storyTitle ? <PostsPanel contentTitle={storyTitle || postType}/> : <></>}
        </>
    )
}

export default PanelPostsAddingPage