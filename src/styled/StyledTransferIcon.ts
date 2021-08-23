import styled from "styled-components";

export const StyledTransferIcon = styled.div`
  border-radius: 100%;
  background-color: ${props => props.theme.color.main};
  padding: 20px;
  position: relative;
  transform: translateY(-50px);
  
  svg {
    fill: white;
    display: block;
  }
`
