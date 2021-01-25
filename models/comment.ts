import { model, Schema } from 'mongoose'

const commentSchema = new Schema({
    date: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    },

}, { timestamps: true })

export default model('Comment', commentSchema)