import React, { useEffect, useState } from "react";
import { getPosts, PostProps } from "../../APIRequests/Post";
import PostComponent from "../PostComponent/PostComponent";

const MainView = () => {
    const [newestPost, setNewestPost] = useState();

    const fetchNewestPost = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => {
            const allMainPosts = posts.filter((post) => post.content[0].title === "Main");
            const mainViewPost = allMainPosts.reduce((mainPost, nextPost) => {
                if(JSON.stringify(mainPost) === JSON.stringify({})) return nextPost
                return mainPost.date < nextPost.date ? nextPost : mainPost;
            },{})
            setNewestPost(mainViewPost);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchNewestPost()
    }, [])

    return (
        <>
            {newestPost ? <PostComponent post={newestPost} postChapters={[]}/> : <></>}
        </>
    )
}

export default MainView;