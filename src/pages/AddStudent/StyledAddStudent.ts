import styled from 'styled-components';

export const MainContent = styled.div`
  padding: 0 130px;
  height: 100vh;
  width: 1440px;
  margin: 0 auto;
  margin-top: 23px;
  @media ${(props) => props.theme.media.medium} {
    width: 1000px;
    padding: 0px 54px;
  }
  @media ${(props) => props.theme.media.small} {
    width: 600px;
    padding: 0px 28px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: auto;
    padding: 0 20px;
  }
`;
export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 30px;
  @media ${(props) => props.theme.media.medium} {
    font-size: 35px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 22px;
  }
`;
export const BackToPage = styled.div`
  width: 315px;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 35px;
  text-transform: uppercase;
  background-image: url(./arrow-left.svg);
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 15px;
  margin-bottom: 30px;
  :hover {
    text-decoration-skip-ink: none;
    text-decoration: underline;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
