"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
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
        required: true
    },
    content: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Content"
        }
    ],
    comment: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.model('Post', postSchema);
//# sourceMappingURL=post.js.map