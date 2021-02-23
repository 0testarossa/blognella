import styled from 'styled-components'

export const MainViewContainer = styled.div<{minWidth: string, width: string, isAbout: boolean, ratio: number}>`
    /* display: flex; */
    /* justify-content: space-between; */
    margin: 0rem 1rem;
    /* width:100%; */
    min-width: ${props => props.minWidth};
    width: ${props => props.width};

    @media (max-width: 825px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${80*props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${80*props.ratio}px)` : "unset"};
    }

    @media (max-width: 740px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${240*props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${240*props.ratio}px)` : "unset"};
    }

    @media (max-width: 585px) {
        width: ${props => props.isAbout ? `calc(${props.width} - ${350*props.ratio}px)` : "100%"};
    min-width: ${props => props.isAbout ? `calc(${props.width} - ${350*props.ratio}px)` : "unset"};
    }
`;