import { model, Schema } from 'mongoose'

const postSchema = new Schema({
    date: {
        type: String,
        required: true
    },

    tags: {
        type: [String],
        required: true
    },

    title: {
        type: String,
        required: true
    },

    content: [
        {
          type: Schema.Types.ObjectId,
          ref: "Content"
        }
      ]

}, { timestamps: true })

export default model('Post', postSchema)