"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_date_picker_1 = __importDefault(require("react-date-picker"));
const PostComponent = (props) => {
    const [value, onChange] = react_1.useState(new Date());
    // const date = new Date('2018-05-18T04:00:00Z').toLocaleString();
    // const date = new Date(props.post.date).toUTCString();
    // const customoldData = new Date('2021-01-19T21:41:19.169Z').toDateString()
    // const customnewData = new Date('2021-02-19T21:41:19.169Z').toDateString()
    // console.log("old");
    // console.log(customoldData);
    // console.log("new");
    // console.log(customnewData);
    // const actualDate = new Date().toDateString()
    // console.log(customoldData > customnewData); //true
    // console.log(customoldData > actualDate)
    const date = new Date(props.post.date).toDateString();
    const getTags = () => {
        return props.post.tags.map((tag) => react_1.default.createElement("span", { key: tag }, tag));
    };
    console.log(date);
    console.log("calendar");
    console.log(value.toDateString());
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_date_picker_1.default, { onChange: onChange, value: value }),
        react_1.default.createElement("div", null, date),
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: props.post.content[0].text } }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", null, "Tagi: "),
            getTags())));
};
exports.default = PostComponent;
//# sourceMappingURL=PostComponent.js.map