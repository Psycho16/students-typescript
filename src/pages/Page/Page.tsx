import React from 'react';
import { observer } from 'mobx-react';
import store from '../../store';
import { Link } from 'react-router-dom';

import {
  AppTitle,
  TitleContent,
  MainContent,
  MainStudentsWrapper,
  StudentWrapper,
  StudentName,
  StudentSpecialty,
  StudentGroup,
  StudentAge,
  StudentRating,
} from './StyledApp';

import { Students, Search, Button } from '../../components';
import { onLoadStudents } from '../../functions/getData';

const Page: React.FC = () => {
  React.useEffect(() => {
    onLoadStudents();
  }, []);

  return (
    <MainContent>
      <TitleContent>
        <AppTitle>Студенты</AppTitle>
        <Link to="/AddStudent" className="router-link">
          <Button buttonText="Добавить студента" needsvg={true} />
        </Link>
      </TitleContent>
      {/* <AppTitle>Студенты</AppTitle>
      <Button /> */}
      <Search />
      <StudentWrapper>
        <StudentName>ФИО</StudentName>
        <StudentSpecialty>Специальность</StudentSpecialty>
        <StudentGroup>Группа</StudentGroup>
        <StudentAge>Возраст</StudentAge>
        <StudentRating>Рейтинг</StudentRating>
      </StudentWrapper>
      <MainStudentsWrapper>
        {store.studentsForView &&
          store.studentsForView.map((student) => <Students key={student.id} {...student} />)}
      </MainStudentsWrapper>
    </MainContent>
  );
};

export default observer(Page);
