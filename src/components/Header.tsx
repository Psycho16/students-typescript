import React from 'react';
import dbLogo from '../assets/dbLogo.svg';
import styled from 'styled-components';

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

const StyledSpan = styled.span`
  display: inline;
  text-transform: lowercase;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  margin-bottom: 75px;
  padding: 22px 130px;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 39px;
    padding: 22px 30px;
  }
`;
const LogoDB = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 45px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 26px;
  }
`;
const StyledTitle = styled.h1`
  font-size: 20px;
  line-height: 44px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.media.phone} {
    font-size: 20px;
    line-height: 44px;
  }
`;

export default Header;
