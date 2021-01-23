import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getPost, getPosts, PostProps } from "../../APIRequests/Post";
import PostComponent from "../PostComponent/PostComponent";

const PostView = (props) => {
    const [post, setPost] = useState();
    const [postChapters, setPostChapters] = useState([]);

    const fetchPost = () => {
        getPost(props.match.params.id)
        .then(({ data: { post } }: PostProps | any) => {
            setPost(post);
            fetchAllPosts(post.title)
        })
        .catch((err: Error) => console.log(err))
    }

    const fetchAllPosts = (storyTitle:string) => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => {
            const allPostChapters = posts.filter((post) => post.content[0].title === storyTitle);
            setPostChapters(allPostChapters || []);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchPost()
    }, [props])

    return (
        <>
        {post ? <PostComponent post={post} postChapters={postChapters} /> : <></>}
        </>
    )
}

export default withRouter(PostView);