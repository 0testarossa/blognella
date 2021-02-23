import styled from 'styled-components';

export const StyledPanel = styled.div<{inputColor: string}>`
    label{
        color: white;
    }
    .MuiInputBase-input{
        /* color: #dfdfdf; */
    }
    input{
        color: ${props => props.inputColor};
    }
`