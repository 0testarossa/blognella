"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// const mongoose = require('mongoose');
// const { model, Schema } = mongoose;
const todoSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.model('Todo', todoSchema);
// module.exports = model('Todo', todoSchema);
//# sourceMappingURL=todo.js.map