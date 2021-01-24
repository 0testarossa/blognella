import React, { useState } from "react";
import { getPosts, PostProps } from "../../APIRequests/Post";
import PostAboutComponent from "../PostComponent/PostAboutComponent";
import { AboutSection } from "./DefaultView.styles";


const DefaultViewAbout = () => {
    const [aboutPost, setAboutPost] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => {
            const allAboutPosts = posts.filter((post) => post.content[0].title === "About");
            setAboutPost(allAboutPosts);
        })
        .catch((err: Error) => console.log(err))
    }

    if(aboutPost.length === 0) fetchAllPosts();

    return (
        <AboutSection>
            {aboutPost.length > 0 ? <PostAboutComponent post={aboutPost[0]} /> : <div>{lang === "en" ? "There is no About post" : "Brak wpisu o mnie"}</div>}
        </AboutSection>
    )
}

export default DefaultViewAbout;