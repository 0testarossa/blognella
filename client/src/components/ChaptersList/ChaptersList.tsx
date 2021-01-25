import React, {useState, useEffect} from "react";
import { MenuItem, Select } from "@material-ui/core";
import { getPosts, PostProps } from "../../APIRequests/Post";
import styled from "styled-components";

const ChaptersList = (props) => {
    const [mainPosts, setMainPosts] = useState<String[]>([]);
    const [postTitle, setPostTitle] = useState("");

    const FilterAndSetMainPosts = (posts:PostProps[]) => {
        const mainPosts = posts.filter((post:PostProps) => post.content[0].title === "Main");
        const mainTitles = mainPosts.map((post) => post.title)
        setMainPosts(mainTitles);
    }

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => FilterAndSetMainPosts(posts))
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllPosts();
    }, [])

    useEffect(() => {
        if(postTitle === "" && props.storyTitle) {
            setPostTitle(props.storyTitle)
        }
    }, [props.storyTitle])

    const handlePostTitle = (event) => {
        setPostTitle(event.target.value);
        props.setPostTitle(event.target.value);
    }

    const getTitleList = () => {
        return mainPosts.map((postTitle:any) => <MenuItem key={postTitle} value={postTitle}>{postTitle}</MenuItem>)
    }

    const StyledSelect = styled.div`
    .MuiInputBase-root{
        color: white;
      }
    `

    return (
        <StyledSelect>
            <Select
            value={postTitle}
            onChange={handlePostTitle}
            >
            {getTitleList()}
            </Select>
        </StyledSelect>
    )
}

export default ChaptersList;