import React, {useState, useEffect} from "react";
import { MenuItem, Select } from "@material-ui/core";
import { getPosts, PostProps } from "../../APIRequests/Post";

const ChaptersList = (props) => {
    const [mainPosts, setMainPosts] = useState<String[]>([]);
    const [postTitle, setPostTitle] = useState("");

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => FilterAndSetMainPosts(posts))
        .catch((err: Error) => console.log(err))
    }

    const FilterAndSetMainPosts = (posts:PostProps[]) => {
        const mainPosts = posts.filter((post:PostProps) => post.content[0].title === "Main");
        const mainTitles = mainPosts.map((post) => post.title)
        console.log(mainTitles);
        setMainPosts(mainTitles);
    }

    const handlePostTitle = (event) => {
        setPostTitle(event.target.value);
        props.setPostTitle(event.target.value);
    }

    const getTitleList = () => {
        return mainPosts.map((postTitle:any) => <MenuItem key={postTitle} value={postTitle}>{postTitle}</MenuItem>)
    }

    return (
        <>
            <Select
            value={postTitle}
            onChange={handlePostTitle}
            >
            {getTitleList()}
            </Select>
        </>
    )
}

export default ChaptersList;