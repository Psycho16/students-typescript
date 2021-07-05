import React from 'react';
import { InputWrapper, InputTitle, InputForm } from './StyledCustomTextInput';

interface customTextInput {
  property: string;
  placeholder: string;
}

const CustomInput: React.FC<customTextInput> = ({ property, placeholder }) => {
  return (
    <InputWrapper>
      <InputTitle>{property}</InputTitle>
      <InputForm type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

export default CustomInput;
