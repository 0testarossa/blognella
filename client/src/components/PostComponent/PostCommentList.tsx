import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { createComment } from "../../APIRequests/Comment";
import { updatePost } from "../../APIRequests/Post";
import { getUser, UserProps } from "../../APIRequests/User";
import PostCommentComponent from "./PostCommentComponent";

const PostCommentList = (props) => {
    const [nick, setNick] = useState("Guest");
    const [role, setRole] = useState("guest");
    // const [user, setUser] = useState();
    const [newComment, setNewComment] = useState("");

    const fetchUser = (userId:string) => {
        getUser(userId)
        .then(({ data: { user } }: UserProps | any) => {
            setNick(user.nick);
            setRole(user.role);
            // setUser(user);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        const userId = localStorage.getItem('blognellaId');
        if(userId) {
            fetchUser(userId);
        } else {
            setNick("Guest");
            setRole("guest");
        }
    }, [props])

    const updatePostToEditComment = (commentId:string) => {
        const updatedComments = props.post.comment.filter((comment) => comment !== commentId);
        const post = {
            date: props.post.date,
            tags: props.post.tags,
            title: props.post.title,
            content: props.post.content[0]._id,
            _id: props.post._id,
            user: props.post.user,
            comment: updatedComments
        }
        updatePost(post)
        .then(({ status}) => {
            if (status !== 200) {
              throw new Error('Error! Post not saved')
            }
        })
      .catch((err) => console.log(err))
    }

    const onNewCommentSave = () => {
        const comment = {
            text: newComment,
            date: new Date().toISOString(),
            user: nick
        }

        createComment(comment)
        .then(({ status, data }) => {
            if (status !== 201) {
              throw new Error('Error! Comment not saved')
            }
            const post = {
                date: props.post.date,
                tags: props.post.tags,
                title: props.post.title,
                content: props.post.content[0]._id,
                _id: props.post._id,
                user: props.post.user,
                comment: [...props.post.comment, data.comment._id]
            }
            updatePost(post)
            .then(({ status}) => {
                if (status !== 200) {
                  throw new Error('Error! Post not saved')
                }
            })
          })
          .catch((err) => console.log(err))
    }

    const getComments = () => {
        return props.post.comment.map((comment) => <PostCommentComponent key={comment._id} nick={nick} role={role} comment={comment} updatePostToDeleteComment={updatePostToEditComment}/>)  
    }


    return (
    <>
    {props.post.comment.length < 1 ? <div>No comments</div> : getComments()}

    <TextField
                    id="standard-full-width"
                    label="Add Comment"
                    style={{ margin: 8 }}
                    placeholder="Please type in your comment here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={newComment}
                    onChange={(input) => setNewComment(input.target.value)}
    />
    <Button variant="contained" color="primary" onClick={onNewCommentSave}>
        Add Comment
    </Button>
    </>
    )
}

export default PostCommentList;