import Content from '../models/content';
import ContentValidator from '../classValidators/contentClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getContents = async (req, res) => {
    try {
        const contents = await Content.find()
        res.status(200).json({ contents })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getContent = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const content = await Content.findOne({_id: id})
        if(!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ content })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addContent = async (req, res) => {
    try {
        const body = req.body

        const content = new Content({
            text: body.text,
            title: body.title,
        }) 

        const contentValidator = new ContentValidator(content);
        await validateOrRejectExample(contentValidator);

        const newContent = await content.save()

        res.status(201).json({ content: newContent })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const updateContent = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const contentValidator = new ContentValidator(body);
        await validateOrRejectExample(contentValidator);

        const content = await Content.findOne({_id: id})
        if(!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updatedContent = await Content.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({content: updatedContent})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const deleteContent = async (req, res) => {
    try {
        const {params: { id }} = req;
        const content = await Content.findOne({_id: id})
        if(!content) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const deletedContent = await Content.findByIdAndRemove(
            id
        )
        res.status(200).json({ content: deletedContent });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getContents, getContent, addContent, updateContent, deleteContent }