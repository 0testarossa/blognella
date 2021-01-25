import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    post: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post"
        }
      ]
}, { timestamps: true })

export default model('Bookmark', bookmarkSchema.plugin(uniqueValidator));