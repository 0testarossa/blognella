import React from "react";
import PostCommentList from "./PostCommentList";
import PostLinkComponent from "./PostLinkComponent";
// import DatePicker from 'react-date-picker';

const PostComponent = (props) => {
    // const [value, onChange] = useState<any>(new Date());
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


    // const date = new Date(props.post.date).toDateString();
    const lang = localStorage.getItem("blognellaLang");
    const options = {weekday: 'long',  year: "numeric", month: "long", day: "numeric", };  
    const date = new Date(props.post.date).toLocaleDateString(lang === "en" ? "en-GB" : "pl-GB", options);
    // console.log(new Date(props.post.date).toLocaleDateString('en-GB', options));
    // console.log(new Date(props.post.date).toLocaleDateString('pl-GB', options));

    const getTags = () => {
        return props.post.tags.map((tag) => <span key={tag}>{tag}</span>)
    }

    const getPostChapters = () => {
        return props.postChapters.map((postChapter) => <div key={postChapter._id}><PostLinkComponent post={postChapter}/></div>)
    }

    return (
        props.post.date > new Date().toISOString() ? <div>{lang === "en" ? "It will be avaiable soon - " : "Dostępne wkrótce - "}{date}</div> : 
            <>
            {/* <DatePicker
            onChange={onChange}
            value={value}
            /> */}
            <div>{date}</div>
            <div>{props.post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: props.post.content[0].text }} />

            {props.postChapters.length > 0 ? <div>{lang === "en" ? "Chapters" : "Rozdziały"}</div> : <></>}
            {getPostChapters()}

            <div><span>{lang === "en" ? "Tags: " : "Etykiety: "}</span>{getTags()}</div>
            <div>{lang === "en" ? "Added by " : "Dodane przez "}{props.post.user}</div>
            <PostCommentList post={props.post}/>
            </>
        
    )
}

export default PostComponent;