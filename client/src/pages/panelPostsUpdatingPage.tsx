import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ChaptersList from "../components/ChaptersList/ChaptersList";
import PostsPanel from "../components/PostsPanel/PostsPanel";

const PanelPostsUpdatingPage = (props) => {
    const [postType, setPostType] = useState("");
    const [storyTitle, setStoryTitle] = useState("");

    const handlePostType = (event) => {
        setPostType(event.target.value);
    };
    console.log("props")
    console.log(props)
    // console.log(match.params)
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
        {postType === "Chapter" ? <ChaptersList setPostTitle={setStoryTitle}/> : <></>}

        {postType === "Main" || postType === "About" || storyTitle ? <PostsPanel contentTitle={storyTitle || postType}/> : <></>}
        </>
    )
}

export default withRouter(PanelPostsUpdatingPage);
// export default PanelPostsUpdatingPage