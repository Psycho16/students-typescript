import React from 'react';
import { CustomTextInput, CustomPopupInput } from '../../components';

const AddStudent: React.FC = () => {
  return (
    <div>
      <CustomTextInput property="ФИО" placeholder="Иванов Иван Иванович" />
      <CustomTextInput property="Email" placeholder="ivanov@gmail.com" />
      <CustomTextInput property="Рейтинг" placeholder="0" />
      <CustomPopupInput
        property="Специальность"
        placeholder="математика"
        items={['МТ', 'Фиит']}
      ></CustomPopupInput>
    </div>
  );
};

export default AddStudent;
