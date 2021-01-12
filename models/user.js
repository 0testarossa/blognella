const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
    nick: {
        type: String,
        required: true
    },

    login: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = model('User', userSchema);