import React from 'react';
import dbLogo from './dbLogo.svg';
import {
  HeaderContainer,
  LogoDB,
  StyledTitle,
  StyledSpan,
  SpanBy,
  TitleAndLogo,
} from './StyledHeader';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleAndLogo>
        <LogoDB src={dbLogo} alt="logo doubletapp" />
        <StyledTitle>
          Students <SpanBy>by</SpanBy>
          <StyledSpan> PsychoXgod</StyledSpan>
        </StyledTitle>
      </TitleAndLogo>
    </HeaderContainer>
  );
};

export default Header;
