import styled from 'styled-components'

export const MainViewContainer = styled.div<{minWidth: string, width: string, isAbout: boolean}>`
    /* display: flex; */
    /* justify-content: space-between; */
    margin: 0rem 1rem;
    /* width:100%; */
    min-width: ${props => props.minWidth};
    width: ${props => props.width};

    @media (max-width: 872px) {
    width: ${props => props.isAbout ? "710px" : "100%"};
    min-width: ${props => props.isAbout ? "710px" : "unset"};
    }

    @media (max-width: 791px) {
        width: ${props => props.isAbout ? "550px" : "100%"};
    min-width: ${props => props.isAbout ? "550px" : "unset"};
    }

    @media (max-width: 652px) {
        width: ${props => props.isAbout ? "400px" : "100%"};
    min-width: ${props => props.isAbout ? "400px" : "unset"};
    }

    @media (max-width: 513px) {
        width: ${props => props.isAbout ? "250px" : "100%"};
    min-width: ${props => props.isAbout ? "250px" : "unset"};
    }
`;