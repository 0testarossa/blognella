import { model, Schema } from 'mongoose'

const contentSchema = new Schema({
    text: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default model('Content', contentSchema)