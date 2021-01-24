import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import ChaptersList from "../components/ChaptersList/ChaptersList";
import PostsPanel from "../components/PostsPanel/PostsPanel";

const PanelPostsAddingPage = () => {
    const [postType, setPostType] = useState("");
    const [storyTitle, setStoryTitle] = useState("");
    const lang = localStorage.getItem("blognellaLang");

    const handlePostType = (event) => {
        setPostType(event.target.value);
    };

    return (
        <>
         <Select
          value={postType}
          onChange={handlePostType}
        >
          <MenuItem value="Main">{lang === "en" ? "Main" : "Wpis"}</MenuItem>
          <MenuItem value="Chapter">{lang === "en" ? "Chapter" : "Rozdział"}</MenuItem>
          <MenuItem value="About">{lang === "en" ? "About" : "O mnie"}</MenuItem>
        </Select>
        <div></div>
        {postType === "Chapter" ? <ChaptersList setPostTitle={setStoryTitle}/> : <></>}

        {postType === "Main" || postType === "About" || storyTitle ? <PostsPanel contentTitle={storyTitle || postType}/> : <></>}
        </>
    )
}

export default PanelPostsAddingPage