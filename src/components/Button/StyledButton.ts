import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  min-width: 340px;
  height: 50px;
  background: #49c2e8;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding-left: 110px;
  padding-top: 18px;
  padding-right: 60px;
  padding-bottom: 16px;
  position: relative;
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
