import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, withRouter } from "react-router-dom";
import { deletePost, getPosts, PostProps } from "../../APIRequests/Post";

const PostsPanelList = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllPosts = () => {
        getPosts()
        .then(({ data: { posts } }: PostProps[] | any) => setAllPosts(posts))
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllPosts()
    }, [props])

      const onPostDelete = (post:PostProps) => {
        deletePost(post._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Post not deleted')
            }
            fetchAllPosts()
            })
            .catch((err) => console.log(err))
    }

      const getListItems = () => {
          return allPosts.map((post:PostProps) => 
          <ListItem key={post._id}>
          <ListItemText
            primary={ <Link to={{
                pathname: `/panel/posts/${post._id}`,
                // search: `?id=${post._id}`,
                state: { myId: post._id }
                }}> {post.title} </Link> }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onPostDelete(post)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        );
      }



    return (
        <>
             <List>
              {getListItems()}
            </List>
            <Link to={"/panel/posts/add"}>{lang === "en" ? "Add Post" : "Dodaj Wpis"}</Link>
            {/* <Link to={{
            pathname: '/template',
            search: '?query=abc',
            state: { detail: response.data }
            }}> My Link </Link> */}
        </>
    )
}

export default withRouter(PostsPanelList);