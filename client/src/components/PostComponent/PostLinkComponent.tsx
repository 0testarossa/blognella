import React from "react";
import { Link } from "react-router-dom";

const PostLinkComponent = (props) => {
    return <Link to={`/post/${props.post._id}`}>{props.post.title}</Link>
}

export default PostLinkComponent;