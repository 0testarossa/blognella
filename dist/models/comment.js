"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.model('Comment', commentSchema);
//# sourceMappingURL=comment.js.map