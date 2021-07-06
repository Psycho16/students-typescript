import React from 'react';
import { ButtonWrapper, HelpSvg, ButtonSpan } from './StyledButton';
import plus from './plus.svg';
interface button {
  buttonText: string;
  needsvg: boolean;
}
const Button: React.FC<button> = ({ buttonText, needsvg }) => {
  return (
    <ButtonWrapper>
      {needsvg ? <HelpSvg src={plus} alt="plus"></HelpSvg> : ''}
      <ButtonSpan>{buttonText}</ButtonSpan>
    </ButtonWrapper>
  );
};

export default Button;
