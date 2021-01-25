import styled from 'styled-components'

export const Logo = styled.div`
    font-family: Roboto;
    font-size: 3.5rem;
    padding: 22px 30px;
`;

export const LogoContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    background: #333333;
`;

export const LinksContainer = styled.div`
    display: flex;
`;

export const LinkElement = styled.div`
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;

    &:hover{
        color: #ffffff;
        background-color: #000000;
        text-decoration: none;
    }

    &>a:hover{
        color: #ffffff;
    }
`;

export const LinkLoginElement = styled.div`
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;
    height: fit-content;

    &:hover{
        color: #ffffff;
        background-color: #000000;
        text-decoration: none;
    }

    &>a:hover{
        color: #ffffff;
    }
`;

export const SearchElement = styled.div`
    color: #ffffff;
    padding: 1rem;
    float: left;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid #404040;
    border-right: 0 solid #404040;
`;

export const LoginRegisterContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    background: #333333;
    align-items: flex-end;
`;

export const MainViewTabsContainer = styled.div`
    display:flex;
    background-color:#222222;
    flex-wrap: wrap;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
    border-left: 0 solid #404040;
    border-right: 0 solid #404040;
    margin: 0 10px;
    padding: 10px 0;
`;

export const MainViewTabsContainerWrapper = styled.div`
    width: 100%;
    background: #333333;
`

export const AboutSection = styled.div`
    width:20%;
    border-left: 1px solid #404040;
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    color: #00cccb;
`;

export const MainContentContainer = styled.div`
    display: flex;
    min-height: 40rem;
    background-color: #333333;
    justify-content: space-between;
    flex-grow: 1;
    padding-top: 1rem;
`;

export const StyledAdminPanelContainer = styled.div`
    display:flex;
    height: 100%;
    /* flex-direction: column; */
`;
