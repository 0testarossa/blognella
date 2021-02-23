import styled from 'styled-components'

export const StyledMain = styled.main<{inputColor: string}>`
    max-width: 930px;
    margin: 0rem auto 0rem auto;
    .MuiInputBase-input {
        color: ${props => props.inputColor};
    }
    /* background-color: #333333; */
`

export const StyledPanelContent = styled.div<{width: string, iconColor: string}>`
    /* width: 100%; */
    width: ${props => props.width};
    .MuiSvgIcon-root {
        color: ${props => props.iconColor}
    }
    a{
        text-decoration: underline !important;
    }
`;

export const theme = {
    root: {
        default: "#292929",
        white: "#f9f9f9",
        purple: "#3d1340",
        red: "#580000",
    },
    page: {
        default: "#333333",
        white: "white",
        purple: "#602a67",
        red: "#7d0000",
    },
    bookmarks: {
        default: "#222222",
        white: "#e2c1d7",
        purple: "#431a52",
        red: "#320000",
    },
    text: {
        default: "white",
        white: "black",
        purple: "white",
        red: "white",
    },
    decoratedText: {
        default: "#00cccb",
        white: "#75176a",
        purple: "#ffeb00",
        red: "#d0de59",
    },
    comments: {
        default: "#303030",
        white: "#be64ab",
        purple: "#7d4085",
        // purple: "#fce8fd",
        red: "#610505",
        // red: "#cddb56",
    },
    inputText: {
        default: " #dfdfdf",
        white: "black",
        purple: "white",
        red: "white"
    }
}