import { model, Schema } from 'mongoose'

const imageSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    data: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default model('Image', imageSchema)