import Layout from '../models/layout';
import LayoutValidator from '../classValidators/layoutClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

const getLayouts = async (req, res) => {
    try {
        const layouts = await Layout.find()
        res.status(200).json({ layouts })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getLayout = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const layout = await Layout.findOne({_id: id})
        if(!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ layout })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const addLayout = async (req, res) => {
    try {
        const body = req.body

        const layout = new Layout({
            name: body.name,
            mainWidth: body.mainWidth,
        }) 

        const allLayouts = await Layout.find();
        if(allLayouts.length > 0) {
            res.status(409).json({data: "only one layout allowed"});
            return;
        }

        const layoutValidator = new LayoutValidator(layout);
        await validateOrRejectExample(layoutValidator);

        const newLayout = await layout.save()

        res.status(201).json({ layout: newLayout })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const updateLayout = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const layoutValidator = new LayoutValidator(body);
        await validateOrRejectExample(layoutValidator);

        const layout = await Layout.findOne({_id: id})
        if(!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateLayout = await Layout.findByIdAndUpdate(
            { _id: id },
            body
        )

        res.status(200).json({layout: updateLayout})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        // res.status(403).json("Fordidden");
        res.status(403).json(error);
    }
}

const deleteLayout = async (req, res) => {
    try {
        const {params: { id }} = req;
        const layout = await Layout.findOne({_id: id})
        if(!layout) {
            res.status(404).json("Id doesn't exist");
            return;
        }


        const deletedLayout = await Layout.findByIdAndRemove(
            id
        )
        res.status(200).json({ layout: deletedLayout });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

export { getLayouts, getLayout, addLayout, updateLayout, deleteLayout }