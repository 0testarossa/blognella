import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true })

export default model('Tag', tagSchema.plugin(uniqueValidator));