import styled from 'styled-components';

export const StyledSpan = styled.span`
  display: inline;
  text-transform: lowercase;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  margin-bottom: 75px;
  padding: 22px 130px;
  padding: 22px 0;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 39px;
    padding: 22px 30px;
  }
`;
export const TitleAndLogo = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
  @media ${(props) => props.theme.media.phone} {
    width: auto;
    margin: 0;
    padding: 0;
  }
`;
export const LogoDB = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 45px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 26px;
  }
`;
export const StyledTitle = styled.h1`
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
