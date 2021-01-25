import styled from 'styled-components';

export const StyledComponentTextField = styled.div`
    label{
        color: white;
        font-weight: bold;
    }

    .MuiInputBase-input{
        color: #dfdfdf;
    }
`;

export const StyledCommentAuthor = styled.span`
    font-weight: bold;
`;

export const StyledCommentButton = styled.span`
    margin-left: 1rem;
    color: #00cccb;
    cursor: pointer;

    &:hover{
        color: white;
    }

    &:active{
        color: #dfdfdf;
    }
`;