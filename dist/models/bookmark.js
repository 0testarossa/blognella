"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookmarkSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    post: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.model('Bookmark', bookmarkSchema);
//# sourceMappingURL=bookmark.js.map