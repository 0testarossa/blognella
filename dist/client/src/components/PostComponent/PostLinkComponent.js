"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PostLinkComponent = (props) => {
    return react_1.default.createElement(react_router_dom_1.Link, { to: `/ui/post/${props.post._id}` }, props.post.title);
};
exports.default = PostLinkComponent;
//# sourceMappingURL=PostLinkComponent.js.map