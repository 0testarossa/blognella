import Bookmark from '../models/bookmark';
import Post from '../models/post';
import BookmarkValidator from '../classValidators/bookmarkClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find().populate({
                path: 'post', 
                model: 'Post',
                populate: {
                    path: 'content',
                    model: 'Content'
                }
        })
        res.status(200).json({ bookmarks })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getBookmark = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const bookmark = await Bookmark.findOne({_id: id}).populate({
            path: 'post', 
            model: 'Post',
            populate: {
                path: 'content',
                model: 'Content'
            }
    })
        if(!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ bookmark })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addBookmark = async (req, res) => {
    try {
        const body = req.body

        const bookmark = new Bookmark({
            title: body.title,
            post: body.post
        }) 

        const bookmarkValidator = new BookmarkValidator(bookmark);
        await validateOrRejectExample(bookmarkValidator);

        const newBookmark = await bookmark.save()

        res.status(201).json({ bookmark: newBookmark })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const updateBookmark = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const bookmarkValidator = new BookmarkValidator(body);
        await validateOrRejectExample(bookmarkValidator);

        const bookmark = await Bookmark.findOne({_id: id})
        if(!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateBookmark = await Bookmark.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({bookmark: updateBookmark})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const deleteBookmark = async (req, res) => {
    try {
        const {params: { id }} = req;
        const bookmark = await Bookmark.findOne({_id: id})
        if(!bookmark) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const deletedBookmark = await Bookmark.findByIdAndRemove(
            id
        )
        res.status(200).json({ bookmark: deletedBookmark });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getBookmarks, getBookmark, addBookmark, updateBookmark, deleteBookmark }