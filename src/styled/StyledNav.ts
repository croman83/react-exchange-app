import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  padding: 0 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    flex-direction: column;
    padding: 10px;
    color: ${props => props.theme.color.gray};
    text-decoration: none;
    font-size: 1rem;
    border-top: 5px solid transparent;
    
    &.active-link {
      border-top-color: ${props => props.theme.color.main};
    }
    
    span {
      display: block;
      text-align: center;
      padding: 5px 0 0 0;
    }
  }
  
  svg {
    display: block;
    width: 25px;
    height: 25px;
  }
`
