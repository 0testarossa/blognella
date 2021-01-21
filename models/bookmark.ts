import { model, Schema } from 'mongoose'

const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    post: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post"
        }
      ]
}, { timestamps: true })

export default model('Bookmark', bookmarkSchema)