// const mongoose = require('mongoose');
// const { model, Schema } = mongoose;

import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
    nick: {
        type: String,
        required: true,
        unique: true
    },

    login: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: Object,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true })

export default model('User', userSchema.plugin(uniqueValidator));
// module.exports = model('User', userSchema);