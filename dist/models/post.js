"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
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
        required: true,
        unique: true
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
    ],
    user: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Post', postSchema.plugin(mongoose_unique_validator_1.default));
//# sourceMappingURL=post.js.map