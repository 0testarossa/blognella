import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import ChaptersList from "../components/ChaptersList/ChaptersList";
import PostsPanel from "../components/PostsPanel/PostsPanel";
import styled from 'styled-components';

const PanelPostsAddingPage = () => {
    const [postType, setPostType] = useState("");
    const [storyTitle, setStoryTitle] = useState("");
    const lang = localStorage.getItem("blognellaLang");

    const handlePostType = (event) => {
        setPostType(event.target.value);
    };

    const StyledSelect = styled.div`
    .MuiInputBase-root{
        color: white;
      }
    `

    return (
        <>
        <StyledSelect>
          <Select
            value={postType}
            onChange={handlePostType}
          >
            <MenuItem value="Main">{lang === "en" ? "Main" : "Wpis"}</MenuItem>
            <MenuItem value="Chapter">{lang === "en" ? "Chapter" : "Rozdział"}</MenuItem>
            <MenuItem value="About">{lang === "en" ? "About" : "O mnie"}</MenuItem>
          </Select>
        </StyledSelect>
        <div></div>
        {postType === "Chapter" ? <ChaptersList setPostTitle={setStoryTitle}/> : <></>}

        {postType === "Main" || postType === "About" || storyTitle ? <PostsPanel contentTitle={storyTitle || postType}/> : <></>}
        </>
    )
}

export default PanelPostsAddingPage