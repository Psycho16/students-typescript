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
`;

export const HelpSvg = styled.img`
  position: absolute;
  height: 17px;
  width: 17px;
  left: 75px;
  right: 245px;
  top: calc(50% - 17px / 2);
`;
export const ButtonSpan = styled.span`
  width: 100%;
`;
