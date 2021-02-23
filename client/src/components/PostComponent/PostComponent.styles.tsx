import styled from 'styled-components';

export const StyledDate = styled.div`
    font-size: 0.7rem;
    font-weight: bold;
`;

export const StyledTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem 0;
`;

export const StyledText = styled.div`
    margin: 0.2rem 0;
    /* overflow: auto; */
    overflow: hidden;
    max-width: 46rem;
    word-break: break-all;
`;

export const StyledChaptersContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
`;

export const StyledChapters = styled.div`
    font-size: 1.6rem;
    margin-top: 1rem;
    
`;

export const StyledTagsLabel = styled.div<{color:string}>`
    margin-top: 0.5rem;
    font-weight: bold;
    color: ${props => props.color};
    /* color: #00cccb; */
`;

export const StyledTags = styled.div<{color:string}>`
    /* color: #00cccb; */
    color: ${props => props.color};
    font-size: 0.92rem;
    font-style: oblique;
    margin-bottom: 0.5rem;
`;

export const StyledAuthorContainer = styled.div`
    margin-bottom: 2rem;
    font-size: 0.7rem;
    font-weight: bold;
`;

export const StyledAuthor = styled.span`
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const StyledBottomPageContainer = styled.div`
    width: 100%;
    /* background-color: #303030; */
    padding: 0.2rem 0.75rem;
    border-bottom: 2px solid #404040;
    margin-top: 2rem;
`;
