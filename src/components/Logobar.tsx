import React from 'react'
import { useSelector } from "react-redux";

import { selectors } from "../features/user";
import { StyledLogo, StyledLogoIcon, StyledLogoText } from '../styled';

export const Logobar: React.FC = () => {
    const name = useSelector(selectors.getUserName)

    return (
        <StyledLogo>
            <StyledLogoIcon/>
            <StyledLogoText>Hey, { name }</StyledLogoText>
        </StyledLogo>
    );
}
