import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  min-width: 340px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  background: #49c2e8;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 60px 16px 110px;
  position: relative;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background: #65accc;
  }
  @media ${(props) => props.theme.media.small} {
    max-width: 252px;
    min-width: 252px;
    padding: 18px 8px 16px 34px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 600px;
    min-width: 335px;
    width: 100%;
  }
`;

export const HelpSvg = styled.img`
  position: absolute;
  height: 17px;
  width: 17px;
  left: 75px;
  right: 245px;
  top: calc(50% - 17px / 2);
  @media ${(props) => props.theme.media.small} {
    height: 15px;
    width: 15px;
    left: 31px;
  }
`;
export const ButtonSpan = styled.span`
  width: 100%;
`;
