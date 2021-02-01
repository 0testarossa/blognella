import Comment from '../models/comment';
import Post from '../models/post';
import CommentValidator from '../classValidators/commentClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({ comments })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getComment = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const comment = await Comment.findOne({_id: id});
        if(!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ comment })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addComment = async (req, res) => {
    try {
        const body = req.body

        const comment = new Comment({
            date: body.date,
            text: body.text,
            user: body.user
        }) 

        const commentValidator = new CommentValidator(comment);
        await validateOrRejectExample(commentValidator);

        const newComment = await comment.save()

        res.status(201).json({ comment: newComment })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const updateComment = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const commentValidator = new CommentValidator(body);
        await validateOrRejectExample(commentValidator);

        const comment = await Comment.findOne({_id: id})
        if(!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateComment = await Comment.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({comment: updateComment})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const deleteComment = async (req, res) => {
    try {
        const {params: { id }} = req;
        const comment = await Comment.findOne({_id: id})
        if(!comment) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        const posts = await Post.find()
        posts.map((post) => {
            const updatedCommentList = post.comment.filter((comment) => {
                return comment !== id;
            })
            if(updatedCommentList.length !== post.comment.length) {
                Post.findByIdAndUpdate(
                    { _id: post._id },
                    {tags: post.tags,
                    content: post.content,
                    comment: updatedCommentList,
                    _id: post._id,
                    date: post.date,
                    title: post.title,
                    user: post.user
                    }
                )
            }
        })

        const deletedComment = await Comment.findByIdAndRemove(
            id
        )
        res.status(200).json({ comment: deletedComment });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getComments, getComment, addComment, updateComment, deleteComment }