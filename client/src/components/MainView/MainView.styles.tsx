import styled from 'styled-components'

export const MainViewContainer = styled.div<{minWidth: string, width: string}>`
    /* display: flex; */
    /* justify-content: space-between; */
    margin: 0rem 1rem;
    /* width:100%; */
    min-width: ${props => props.minWidth};
    width: ${props => props.width}
`;