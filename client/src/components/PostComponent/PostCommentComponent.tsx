import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { deleteComment, updateComment } from "../../APIRequests/Comment";

const PostCommentComponent = (props) => {
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [commentText, setCommentText] = useState(props.comment.text);

    const canEdit = props.role !== "guest" && (props.comment.user === props.nick || props.role === "admin" )

    const onEdit = () => {
        setIsEditingMode(!isEditingMode);
    }

    const onDelete = () => {
        props.updatePostToDeleteComment(props.comment._id);
        deleteComment(props.comment._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Comment not deleted')
            }
            })
            .catch((err) => console.log(err))
    }

    const onSaveEditedComment = () => {
        setIsEditingMode(!isEditingMode);

        const comment = {
            _id: props.comment._id,
            date: props.comment.date,
            text: commentText,
            user: props.comment.user
        }
        updateComment(comment)
        .then(({ status}) => {
            if (status !== 200) {
            throw new Error('Error! Comment not saved')
            }
        })
        .catch((err) => console.log(err))

    }

    return (
        <>
            <div>
                {props.comment.user} {new Date(props.comment.date).toDateString()}
                {canEdit ? <><span onClick={onEdit}>Edit</span><span onClick={onDelete}>Delete</span></> : <></>}
            </div>
            {/* <div>{props.comment.text}</div> */}
            <TextField
                    id="standard-full-width"
                    label=""
                    style={{ margin: 8 }}
                    placeholder="Please type in your comment here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: !isEditingMode,
                      }}
                    defaultValue={commentText}
                    onChange={(input) => setCommentText(input.target.value)}
            />
            {isEditingMode ? 
            <Button variant="contained" color="primary" onClick={onSaveEditedComment}>
                Save Comment
            </Button> : <></>}
        </>
    )
}

export default PostCommentComponent;