import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNav, StyledTransferIcon } from '../styled';
import { AccountIcon, ExchangeIcon, HistoryIcon, TransferIcon, WalletIcon } from "../icons";

export const Navbar: React.FC = () => (
  <StyledNav>
    <NavLink to="/" activeClassName="active-link" exact>
      <WalletIcon/>
      <span>Wallet</span>
    </NavLink>
    <NavLink to="/exchange" activeClassName="active-link">
      <ExchangeIcon/>
      <span>Exchange</span>
    </NavLink>
      <StyledTransferIcon>
          <TransferIcon/>
      </StyledTransferIcon>
    <NavLink to="/history" activeClassName="active-link">
      <HistoryIcon/>
      <span>History</span>
    </NavLink>
    <NavLink to="/settings" activeClassName="active-link">
      <AccountIcon/>
      <span>Settings</span>
    </NavLink>
  </StyledNav>
)
