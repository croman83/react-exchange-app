import styled from "styled-components";

export const StyledSwitchButton = styled.div`
  border-radius: 100%;
  background-color: white;
  padding: 20px;
  position: relative;
  transform: rotate(90deg);
  width: 25px;
  height: 25px;
  box-shadow: black 0 0 10px -5px;
  cursor: pointer;
  
  svg {
    fill: ${props => props.theme.color.main};
    display: block;
  }
`
