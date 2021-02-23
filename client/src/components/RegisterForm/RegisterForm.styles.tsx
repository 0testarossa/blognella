import styled from 'styled-components'

export const StyledRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  /* background: #333333; */
  color: white;
  border: 2px solid white;
`

export const FormItem = styled.div`
    display: flex;
    flex-grow: 1;

    label{
      color: white;
    }

    .MuiInputBase-root{
      color: #dfdfdf;
    }
`;

export const LogicControls = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0rem 3rem;
    .MuiButton-containedPrimary{
      margin: 0 0.5rem;
    }
`;
