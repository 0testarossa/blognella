import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getPost, PostProps } from "../../APIRequests/Post";
import PostComponent from "../PostComponent/PostComponent";

const PostView = (props) => {
    const [post, setPost] = useState();

    const fetchPost = () => {
        getPost(props.match.params.id)
        .then(({ data: { post } }: PostProps | any) => {
            setPost(post);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchPost()
    }, [])

    console.log(props.match.params.id)
    return (
        <>
        {post ? <PostComponent post={post} /> : <></>}
        </>
    )
}

export default withRouter(PostView);