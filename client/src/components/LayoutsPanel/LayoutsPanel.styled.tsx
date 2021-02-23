import styled from 'styled-components';

export const StyledLayoutsPanel = styled.div<{textColor:string}>`
    label{
        color: white;
    }
    .MuiInputBase-input{
        /* color: #dfdfdf; */
    }

    .MuiListItem-root{
        &:hover {
            background-color: #292929;
            color: white !important;
        }
    }
    
    .MuiSlider-markActive {
        background-color: unset;
    }

    .MuiSlider-mark {
        background-color: unset;
    }

    .MuiSlider-markLabel {
        color: ${props => props.textColor};
        /* color: white; */
    }

    .MuiSlider-root {
        padding-top: 3.5rem;
    }
`

export const StyledLayoutColorsContainer = styled.div`
    width: 35rem;
    height: 2rem;
`

export const StyledCenterText = styled.div`
    /* color: white; */
    text-align: center;
    font-weight: 600;
    font-size: larger;
    padding: 1rem 0;
`
