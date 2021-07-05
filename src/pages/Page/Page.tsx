import React from 'react';
import { observer } from 'mobx-react';
import store from '../../store';

import {
  AppTitle,
  MainContent,
  MainStudentsWrapper,
  StudentWrapper,
  StudentName,
  StudentSpecialty,
  StudentGroup,
  StudentAge,
  StudentRating,
} from './StyledApp';

import { Students, Search } from '../../components';
import { onLoadStudents } from '../../functions/getData';

const Page: React.FC = () => {
  React.useEffect(() => {
    onLoadStudents();
  }, []);

  return (
    <MainContent>
      <AppTitle>Студенты</AppTitle>
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
