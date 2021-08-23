import React from 'react'
import { NotFoundIcon } from '../icons'
import { StyledNotFoundIcon } from "../styled";

export const NotFoundComponent: React.FC = () => {
  return (
    <StyledNotFoundIcon>
        <NotFoundIcon/>
    </StyledNotFoundIcon>
  )
}
