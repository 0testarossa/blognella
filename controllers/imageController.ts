import Image from '../models/image';
import ImageValidator from '../classValidators/imageClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getImages = async (req, res) => {
    try {
        const images = await Image.find()
        res.status(200).json({ images })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getImage = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const image = await Image.findOne({_id: id})
        if(!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ image })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addImage = async (req, res) => {
    try {
        const body = req.body

        const image = new Image({
            name: body.name,
            data: body.data,
        }) 

        const imageValidator = new ImageValidator(image);
        await validateOrRejectExample(imageValidator);

        const newImage = await image.save()

        res.status(201).json({ image: newImage })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const updateImage = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const imageValidator = new ImageValidator(body);
        await validateOrRejectExample(imageValidator);

        const image = await Image.findOne({_id: id})
        if(!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateImage = await Image.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({image: updateImage})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const deleteImage = async (req, res) => {
    try {
        const {params: { id }} = req;
        const image = await Image.findOne({_id: id})
        if(!image) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const deletedImage = await Image.findByIdAndRemove(
            id
        )
        res.status(200).json({ image: deletedImage });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getImages, getImage, addImage, updateImage, deleteImage }