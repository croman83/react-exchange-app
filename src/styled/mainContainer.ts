import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  overflow-y: auto;
  padding-bottom: 150px;
  background-color: ${props => props.theme.color.bgcolor};
`
