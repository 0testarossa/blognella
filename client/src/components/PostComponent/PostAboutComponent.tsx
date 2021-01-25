import React from "react";

const PostAboutComponent = (props) => {
    const date = new Date(props.post.date).toDateString();

    return (
        props.post.date > new Date().toISOString() ? <div>It will be avaiable soon - {date}</div> : 
            <>
            <div dangerouslySetInnerHTML={{ __html: props.post.content[0].text }} />
            </>
    )
}

export default PostAboutComponent;