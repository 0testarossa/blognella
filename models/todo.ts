import { model, Schema } from 'mongoose'

// const mongoose = require('mongoose');
// const { model, Schema } = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true
    }

}, { timestamps: true })


export default model('Todo', todoSchema)
// module.exports = model('Todo', todoSchema);