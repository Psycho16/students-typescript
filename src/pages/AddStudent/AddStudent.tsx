import React from 'react';
import { CustomTextInput, CustomPopupInput } from '../../components';
import {
  MainContent,
  BackToPage,
  PageTitle,
  InputsWrapper,
  AddImageButton,
  AddImage,
  AddImageText,
  AddImageTitle,
  AddImageSubtitle,
  CreateButton,
} from '../AddStudent/StyledAddStudent';

import { Link } from 'react-router-dom';

const AddStudent: React.FC = () => {
  return (
    <MainContent>
      <Link to="/" className="router-link">
        <BackToPage>назад к списку студентов</BackToPage>
      </Link>
      <PageTitle>Новый студент</PageTitle>
      <AddImageButton>
        <AddImage></AddImage>
        <AddImageText>
          <AddImageTitle>Сменить аватар</AddImageTitle>
          <AddImageSubtitle>500x500</AddImageSubtitle>
        </AddImageText>
      </AddImageButton>
      <InputsWrapper>
        <CustomTextInput property="ФИО" placeholder="Иванов Иван Иванович" />
        <CustomTextInput property="Email" placeholder="ivanov@gmail.com" />
        <CustomPopupInput
          property="Специальность"
          placeholder="Выбрать"
          items={[
            'Математика',
            'Фундаментальная информатика и информационные технологии',
            'Компьютерная безопасность',
            'Прикладная математика',
            'Математика и компьютерные науки',
            'Механика и математическое моделирование',
            'Математическое обеспечение и администрирование информационных систем',
          ]}
        ></CustomPopupInput>
        <CustomPopupInput
          property="Группа"
          placeholder="Выбрать"
          items={['101', '102', '201', '202', '301', '401', '501']}
        ></CustomPopupInput>
        <CustomTextInput property="Рейтинг" placeholder="0" />
        <CustomPopupInput
          property="Пол"
          placeholder="Выбрать"
          items={['Женский', 'Мужской']}
        ></CustomPopupInput>
        <CustomPopupInput
          property="Любимый цвет"
          placeholder="Выбрать"
          items={['синий', 'красный', 'зеленый', 'желтый', 'черный', 'оранжевый', 'радужный']}
        ></CustomPopupInput>
      </InputsWrapper>
      <CreateButton>Создать</CreateButton>
    </MainContent>
  );
};

export default AddStudent;
