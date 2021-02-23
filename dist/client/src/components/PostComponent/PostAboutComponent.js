"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PostAboutComponent = (props) => {
    const date = new Date(props.post.date).toDateString();
    return (props.post.date > new Date().toISOString() ? react_1.default.createElement("div", null,
        "It will be avaiable soon - ",
        date) :
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: { overflow: "hidden" }, dangerouslySetInnerHTML: { __html: props.post.content[0].text } })));
};
exports.default = PostAboutComponent;
//# sourceMappingURL=PostAboutComponent.js.map