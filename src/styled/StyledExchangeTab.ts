import styled from "styled-components";

export const StyledTabSwitcher = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #ececec;
  
  button {
    color: ${props => props.theme.color.gray};
    background-color: transparent;
    border: 0;
    padding: 5px;
    border-bottom: 2px solid transparent;
    position: relative;
    top: 2px;
    cursor: pointer;
    margin: 0 10px;
    transition: all ease .3s;
    font-weight: bold;
    font-size: 1.2rem;
    
    &.active {
      color: ${props => props.theme.color.main};
      border-bottom-color: ${props => props.theme.color.main};
    }
  }
`
