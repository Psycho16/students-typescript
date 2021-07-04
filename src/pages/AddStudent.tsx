import React from 'react';
import { CustomInput } from '../components';

const AddStudent: React.FC = () => {
  return (
    <div>
      <CustomInput property="ФИО" placeholder="Иванов Иван Иванович" items={[]} />
      <CustomInput property="Email" placeholder="ivanov@gmail.com" items={[]} />
      <CustomInput property="Рейтинг" placeholder="0" items={[]} />
    </div>
  );
};

export default AddStudent;
