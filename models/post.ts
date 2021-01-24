import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

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
        required: true,
        unique: true
    },

    content: [
        {
          type: Schema.Types.ObjectId,
          ref: "Content"
        }
      ],

    comment: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment"
        }
      ],
    
    user: {
        type: String,
        required: true
    },
      

}, { timestamps: true })

export default model('Post', postSchema.plugin(uniqueValidator));