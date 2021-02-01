import Tag from '../models/tag';
import Post from '../models/post';
import TagValidator from '../classValidators/tagClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getTags = async (req, res) => {
    try {
        const tags = await Tag.find()
        res.status(200).json({ tags })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getTag = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const tag = await Tag.findOne({_id: id})
        if(!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ tag })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addTag = async (req, res) => {
    try {
        const body = req.body

        const tag = new Tag({
            name: body.name,
        }) 

        const tagValidator = new TagValidator(tag);
        await validateOrRejectExample(tagValidator);

        const newTag = await tag.save()

        res.status(201).json({ tag: newTag })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const updateTag = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const tagValidator = new TagValidator(body);
        await validateOrRejectExample(tagValidator);

        const tag = await Tag.findOne({_id: id})
        if(!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateTag = await Tag.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({tag: updateTag})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const deleteTag = async (req, res) => {
    try {
        const {params: { id }} = req;
        const tag = await Tag.findOne({_id: id})
        if(!tag) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const posts = await Post.find();
        posts.map(async (post) => {
            const tags = post.tags;
            const updatedTags = await tags.filter((nextag) => {
                return nextag != tag.name
            })
            if(tags.length != updatedTags.length) {
                const updatedPost = {
                    content: post.content,
                    _id: post._id,
                    date: post.date,
                    title: post.title,
                    tags: updatedTags
                }
                await Post.findByIdAndUpdate(
                    { _id: post.id },
                    updatedPost
                )
            }
        })

        const deletedTag = await Tag.findByIdAndRemove(
            id
        )
        res.status(200).json({ tag: deletedTag });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getTags, getTag, addTag, updateTag, deleteTag }