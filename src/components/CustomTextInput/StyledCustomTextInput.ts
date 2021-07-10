import styled from 'styled-components';
export const InputWrapper = styled.div`
  min-width: 380px;
  width: 380px;
  height: 76px;
  margin-bottom: 20px;
`;

export const InputTitle = styled.h2`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const InputForm = styled.input`
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  border: 1px solid transparent;
  opacity: 0.5;
  font-size: 16px;
  padding: 16px 77px 12px 20px;
  :focus {
    outline: none;
    font-size: 17px;
    opacity: 1;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  /* Firefox < 19 */
  :focus::-moz-placeholder {
    color: transparent;
  }
  /* Firefox > 19 */
  :focus::-moz-placeholder {
    color: transparent;
  }
`;
