import React from 'react';
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

    return (
        <>
            <div>TEST</div>
      </>
    )
}

export default TestPage