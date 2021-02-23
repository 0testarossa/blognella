import { Popover, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { deleteComment, updateComment } from "../../APIRequests/Comment";
import { theme } from "../../App.styles";
import commentValidate from "../validators/commentValidator";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import { StyledComponentTextField, StyledCommentAuthor, StyledCommentButton} from "./PostComment.styles";

const PostCommentComponent = (props) => {
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [commentText, setCommentText] = useState(props.comment.text);
    const lang = localStorage.getItem("blognellaLang");
    const layout = localStorage.getItem("blognellaTheme") || "default";
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])

    const canEdit = props.role !== "guest" && (props.comment.user === props.nick || props.role === "admin" )

    const onEdit = () => {
        if(isEditingMode){
            setCommentText(props.comment.text);
        }
        setIsEditingMode(!isEditingMode);
    }

    const onDelete = () => {
        props.updatePostToDeleteComment(props.comment._id);
        deleteComment(props.comment._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Comment not deleted')
            }
            window.location.reload();
            })
            .catch((err) => console.log(err))
    }

    const onSaveEditedComment = (event) => {
        event.persist();

        const comment = {
            _id: props.comment._id,
            date: props.comment.date,
            text: commentText.trim(),
            user: props.comment.user
        }
        commentValidate(comment, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            } else {
                updateComment(comment)
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 500) {
                        setIsEditingMode(!isEditingMode);
                        window.location.reload();
                    }
                    else if(status === 403) {
                        setErrorMsg(getUniqueValidatorMsg(data, lang))
                        setAnchorEl(event.target);
                    } else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                        setAnchorEl(event.target);
                    }
                });
            }
        });


        // updateComment(comment)
        // .then(({ status}) => {
        //     if (status !== 200) {
        //     throw new Error('Error! Comment not saved')
        //     }
        // })
        // .catch((err) => console.log(err))
        // window.location.reload();
    }

    return (
        <>
            <div>
                <StyledCommentAuthor>{props.comment.user} </StyledCommentAuthor> {new Date(props.comment.date).toDateString()}
                {canEdit ? <><StyledCommentButton color={theme.decoratedText[layout]} onClick={onEdit}>{lang === "en" ? "Edit" : "Edytuj"}</StyledCommentButton>
                <StyledCommentButton color={theme.decoratedText[layout]} onClick={onDelete}>{lang === "en" ? "Delete" : "Usuń"}</StyledCommentButton></> : <></>}
            </div>
            {/* <div>{props.comment.text}</div> */}
            <StyledComponentTextField>
                {isEditingMode ?
                     <TextField
                     id="standard-full-width"
                     label=""
                     style={{ margin: 8 }}
                     placeholder={lang === "en" ? "Please type in your comment here" : "Proszę wpisz komentarz"}
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
             /> : 
            //  <div style={{padding: "1rem 0", backgroundColor: "#333333", borderBottom: "2px solid #404040", wordBreak: "break-word"}}>
             <div style={{padding: "1rem 0", borderBottom: "2px solid #404040", wordBreak: "break-word"}}>
                {commentText}
             </div>
                }
                {/* <TextField
                        id="standard-full-width"
                        label=""
                        style={{ margin: 8 }}
                        placeholder={lang === "en" ? "Please type in your comment here" : "Proszę wpisz komentarz"}
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
                /> */}
                {isEditingMode ? 
                <Button variant="contained" color="primary" onClick={onSaveEditedComment}>
                    {lang === "en" ? "Save Comment" : "Zapisz Komentarz"}
                </Button> : <></>}
                <Popover
                id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                >
                <Typography>{getValidatorMsg(errorMsg)}</Typography>
                </Popover>
            </StyledComponentTextField>
        </>
    )
}

export default withRouter(PostCommentComponent);