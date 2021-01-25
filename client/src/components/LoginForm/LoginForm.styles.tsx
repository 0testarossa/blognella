import styled from 'styled-components'

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  background: #333333;
  color: white;
  border: 2px solid white;
`

export const FormItem = styled.div`
    display: flex;
    flex-grow: 1;

    .MuiInputBase-root{
      color: #d8d8d8;
    }

    label{
      color: white;
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

