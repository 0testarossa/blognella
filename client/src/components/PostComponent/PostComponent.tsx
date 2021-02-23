import React from "react";
import PostCommentList from "./PostCommentList";
import PostLinkComponent from "./PostLinkComponent";
import {StyledDate, StyledText, StyledTitle, StyledChapters,
    StyledTags, StyledTagsLabel, StyledAuthor, StyledChaptersContainer, StyledBottomPageContainer, StyledAuthorContainer} from "./PostComponent.styles";
import { theme } from "../../App.styles";
// import DatePicker from 'react-date-picker';

const PostComponent = (props) => {
    const lang = localStorage.getItem("blognellaLang");
    const layout = localStorage.getItem("blognellaTheme") || "default";
    const options = {weekday: 'long',  year: "numeric", month: "long", day: "numeric", };  
    const date = new Date(props.post.date).toLocaleDateString(lang === "en" ? "en-GB" : "pl-GB", options);

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

            <StyledBottomPageContainer style={{backgroundColor: theme.comments[layout]}}>
                <StyledTags color={theme.decoratedText[layout]}>
                    <StyledTagsLabel color={theme.decoratedText[layout]}>{lang === "en" ? "Tags: " : "Etykiety: "}</StyledTagsLabel>
                    {getTags()}
                </StyledTags>
            </StyledBottomPageContainer>
                <StyledAuthorContainer>{lang === "en" ? "Added by " : "Dodane przez "}<StyledAuthor>{props.post.user}</StyledAuthor></StyledAuthorContainer>
            <StyledBottomPageContainer style={{backgroundColor: theme.comments[layout]}}>
                <PostCommentList post={props.post}/>
            </StyledBottomPageContainer>
                
            
        </>
        
    )
}

export default PostComponent;