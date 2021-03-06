import Post from '../models/post';
import Content from '../models/content';
import Comment from '../models/comment';
import Bookmark from '../models/bookmark';
import PostValidator from '../classValidators/postClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("content").populate("comment")
        res.status(200).json({ posts })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getPost = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const post = await Post.findOne({_id: id}).populate("content").populate('comment')

        if(!post) {
            // res.status(404).json("Id doesn't exist");
            res.status(200).json({post: {}});
            return;
        }
        res.status(200).json({ post })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addPost = async (req, res) => {
    try {
        const body = req.body

        const content = await Content.findOne({_id:body.content})
        if(!content) {
            console.log("myerror");
            console.log("content ID doesn't exists")
            res.status(403).json("Fordidden");
        }

        if(content.title === "About") {
            const posts = await Post.find().populate("content");
            const aboutPost = posts.find((nextPost) => nextPost.content[0].title === "About");
            if(aboutPost) {
                res.status(403).json("Fordidden");
                return;
            }
        }

        const post = new Post({
            date: body.date,
            tags: body.tags,
            title: body.title,
            content: body.content,
            comment: body.comment,
            user: body.user
        }) 

        const postValidator = new PostValidator(post);
        await validateOrRejectExample(postValidator);

        const newPost = await post.save()

        res.status(201).json({ post: newPost })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const updatePost = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const postValidator = new PostValidator(body);
        await validateOrRejectExample(postValidator);

        const post = await Post.findOne({_id: id})
        if(!post) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updatePost = await Post.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({post: updatePost})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const deletePost = async (req, res) => {
    try {
        const {params: { id }} = req;
        const post = await Post.findOne({_id: id})
        if(!post) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        if(post.content.length > 0) {
            post.content.map(async (content) => {        
                const deletedContent = await Content.findByIdAndRemove(
                    content._id
                )
            })
        }

        if(post.comment.length > 0) {
            post.comment.map(async (comment) => {        
                const deletedComment = await Comment.findByIdAndRemove(
                    comment._id
                )
            })
        }

        const bookmarks = await Bookmark.find();
        bookmarks.map(async (bookmark) => {
            if(bookmark.post === id) {    
                const bookmarkWithoutPost = {
                    post: [],
                    title: bookmark.title
                } 
                const updateBookmark = await Bookmark.findByIdAndUpdate(
                    { _id: bookmark._id },
                    bookmarkWithoutPost
                )
            }
        })

        const deletedPost = await Post.findByIdAndRemove(
            id
        )
        res.status(200).json({ post: deletedPost });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getPosts, getPost, addPost, updatePost, deletePost }