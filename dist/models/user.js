"use strict";
// const mongoose = require('mongoose');
// const { model, Schema } = mongoose;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.model('User', userSchema);
// module.exports = model('User', userSchema);
//# sourceMappingURL=user.js.map