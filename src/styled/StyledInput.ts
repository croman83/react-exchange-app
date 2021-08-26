import styled from "styled-components";

export const StyledInput = styled.div`
  background-color: white;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin: 10px;
  width: 25%;
  
  &.error {
    border-color: ${props => props.theme.color.red};
    
    .input, .balance{
      color: ${props => props.theme.color.red};
    }
  }
  
  .select {
    width: 20%;
    border: none;
    font-weight: bold;
    outline: none;
    font-size: 1.1rem;
  }
  
  .input {
    width: 75%;
    text-align: right;
    border: none;
    outline: none;
    font-size: 1.1rem;
  }
  
  .balance {
    width: 100%;
    padding: 5px;
    color: darkgray;
  }
`
