import styled from 'styled-components'

export const Logo = styled.div`
    font-family: Roboto;
    font-size: 3.5rem;
`;

export const LogoContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const LinksContainer = styled.div`
    display: flex;
`;

export const LinkElement = styled.div`
    color: #ffffff;
    margin: 1rem;
`;

export const LoginRegisterContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`;

export const MainViewTabsContainer = styled.div`
    display:flex;
    background-color:#292929;
`;

export const AboutSection = styled.div`
    width:20%;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
`;

export const MainContentContainer = styled.div`
    display: flex;
    min-height: 40rem;
    background-color: grey;
    justify-content: space-between;
    flex-grow: 1;
    padding-top: 1rem;
`;