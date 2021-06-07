import React from 'react';
import dbLogo from './dbLogo.svg';
import { HeaderContainer, LogoDB, StyledTitle, StyledSpan } from './StyledHeader';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoDB src={dbLogo} alt="logo doubletapp" />
      <StyledTitle>
        Students <StyledSpan>by PsychoXgod</StyledSpan>
      </StyledTitle>
    </HeaderContainer>
  );
};

export default Header;
