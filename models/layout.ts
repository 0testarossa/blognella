import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const layoutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    mainWidth: {
        type: Number,
        required: true,
        unique: true
    },
}, { timestamps: true })

export default model('Layout', layoutSchema.plugin(uniqueValidator));