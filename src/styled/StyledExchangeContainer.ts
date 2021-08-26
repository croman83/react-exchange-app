import styled from "styled-components";
import { StyledSwitchButton } from "./StyledSwitchButton";

export const StyledExchangeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${StyledSwitchButton} {
    transform: rotate(0deg);
    box-shadow: none;
    background-color: transparent;
  }
`
