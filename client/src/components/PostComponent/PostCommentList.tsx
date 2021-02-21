import { Popover, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { createComment } from "../../APIRequests/Comment";
import { updatePost } from "../../APIRequests/Post";
import { getUser, UserProps } from "../../APIRequests/User";
import commentValidate from "../validators/commentValidator";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import { StyledComponentTextField } from "./PostComment.styles";
import PostCommentComponent from "./PostCommentComponent";

const PostCommentList = (props) => {
    const [nick, setNick] = useState("Guest");
    const [role, setRole] = useState("guest");
    // const [user, setUser] = useState();
    const [newComment, setNewComment] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])

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

    const onNewCommentSave = (event) => {
        event.persist();
        const comment = {
            text: newComment.trim(),
            date: new Date().toISOString(),
            user: nick
        }

        commentValidate(comment, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            } else {
                createComment(comment)
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 500) {
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
                        .then(({data, status}: any) => {
                            if(status !== 403 && status !== 500) {
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
    }

    const getComments = () => {
        return props.post.comment.map((comment) => <PostCommentComponent key={comment._id} nick={nick} role={role} comment={comment} updatePostToDeleteComment={updatePostToEditComment}/>)  
    }


    return (
    <>
    {props.post.comment.length < 1 ? <div>{lang === "en" ? "No comments" : "Brak komentarzy"}</div> : getComments()}
    
    <StyledComponentTextField>
        <TextField
                        id="standard-full-width"
                        label={lang === "en" ? "Add Comment" : "Dodaj komentarz"}
                        style={{ margin: 8 }}
                        placeholder={lang === "en" ? "Please type in your comment here" : "Proszę wpisz komentarz"}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={newComment}
                        onChange={(input) => setNewComment(input.target.value)}
        />
        <Button variant="contained" color="primary" onClick={onNewCommentSave}>
            {lang === "en" ? "Add Comment" : "Dodaj Komentarz"}
        </Button>
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

export default PostCommentList;