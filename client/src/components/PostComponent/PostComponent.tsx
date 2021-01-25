import React from "react";
import PostCommentList from "./PostCommentList";
import PostLinkComponent from "./PostLinkComponent";
import {StyledDate, StyledText, StyledTitle, StyledChapters,
    StyledTags, StyledTagsLabel, StyledAuthor, StyledChaptersContainer, StyledBottomPageContainer, StyledAuthorContainer} from "./PostComponent.styles";
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
        return props.post.tags.map((tag) => <span key={tag} style={{marginRight: "1.2rem"}}>{tag}</span>)
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
            <StyledDate>{date}</StyledDate>
            <StyledTitle>{props.post.title}</StyledTitle>
            <StyledText dangerouslySetInnerHTML={{ __html: props.post.content[0].text }} />
            
            <StyledChaptersContainer>
                {props.postChapters.length > 0 ? <StyledChapters>{lang === "en" ? "Chapters" : "Rozdziały"}</StyledChapters> : <></>}
                {getPostChapters()}
            </StyledChaptersContainer>

            <StyledBottomPageContainer>
                <StyledTags>
                    <StyledTagsLabel>{lang === "en" ? "Tags: " : "Etykiety: "}</StyledTagsLabel>
                    {getTags()}
                </StyledTags>
            </StyledBottomPageContainer>
                <StyledAuthorContainer>{lang === "en" ? "Added by " : "Dodane przez "}<StyledAuthor>{props.post.user}</StyledAuthor></StyledAuthorContainer>
            <StyledBottomPageContainer>
                <PostCommentList post={props.post}/>
            </StyledBottomPageContainer>
                
            
        </>
        
    )
}

export default PostComponent;