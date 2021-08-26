import styled from "styled-components";

export const StyledConvertButton = styled.button`
  background-color: ${props => props.theme.color.main};
  border: none;
  color: white;
  border-radius: 1.5rem;
  padding: 1rem 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: black 0 0 10px -5px;
  cursor: pointer;
  display: block;
  margin: 2rem auto;
  
  &[disabled] {
    background-color: lightgray;
    cursor: default;
    box-shadow: none;
  }
`
