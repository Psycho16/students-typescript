import React from 'react';
import { InputWrapper, InputTitle, InputForm } from './StyledCustomInput';

interface customInput {
  property: string;
  placeholder: string;
  items: any; // показывает будем ли мы делать выпадающий список или нет
}

const CustomInput: React.FC<customInput> = ({ property, placeholder, items }) => {
  return items.length === 0 ? (
    <InputWrapper>
      <InputTitle>{property}</InputTitle>
      <InputForm type="text" placeholder={placeholder} />
    </InputWrapper>
  ) : (
    <div>делаем список</div>
  );
};

export default CustomInput;
