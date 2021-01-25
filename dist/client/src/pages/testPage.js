"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import { CommentProps, getComments, getMainComments } from '../APIRequests/Comment';
const TestPage = () => {
    // const [allComments, setAllComments] = useState([]);
    // const fetchAllComments = () => {
    // getComments()
    // .then(({ data: { comments } }: CommentProps[] | any) => {
    //     const subComments = comments.reduce((subComs, nextComment) => {
    //         const subCommentsIds = nextComment.comment.map((com) => com._id)
    //         return [...subComs, ...subCommentsIds]
    //     },[])
    //     const mainComments = comments.filter((comment) =>  subComments.indexOf(comment._id) <= -1 )
    //     setAllComments(mainComments);
    // })
    // .catch((err: Error) => console.log(err))
    // getMainComments()
    // .then(({ data: { mainComments } }: CommentProps[] | any) => setAllComments(mainComments))
    // .catch((err: Error) => console.log(err))
    // }
    // useEffect(() => {
    //     fetchAllComments()
    // }, [])
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null, "TEST")));
};
exports.default = TestPage;
//# sourceMappingURL=testPage.js.map