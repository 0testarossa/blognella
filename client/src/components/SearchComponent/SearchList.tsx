import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, PostProps } from "../../APIRequests/Post";

const SearchList = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => {
            const allMainPosts = posts.filter((post) => post.title === props.search || post.tags.includes(props.search));
            setAllPosts(allMainPosts);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllPosts()
    }, [props.search])

    const getListItems = () => {
        return allPosts.map((post:PostProps) => 
        <ListItem key={post._id}>
        <ListItemText
           primary={ <Link to={{
            pathname: `/ui/post/${post._id}`,
            }}> {post.title} </Link> }
        />
      </ListItem>
      );
    }

    return (
        allPosts.length === 0 ? <div>{lang === "en" ? "There is no post that meets the expected criteria" : "Nie ma wpisów spełniających podane kryteria"}</div> :
        <List>
            {getListItems()}
        </List>
    )
}

export default SearchList;