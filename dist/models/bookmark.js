"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const bookmarkSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    post: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.model('Bookmark', bookmarkSchema.plugin(mongoose_unique_validator_1.default));
//# sourceMappingURL=bookmark.js.map