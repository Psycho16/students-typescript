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

import { getAgeFromBirthday } from '../../functions/getStudentInfo';
import { onLoadStudents } from '../../functions/getData';

interface student {
  id: number;
  email: string;
  name: string;
  sex: string;
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

const Page: React.FC = () => {
  function sortBy(a: student, b: student, type: string): number {
    switch (type) {
      case 'Имя А-Я':
        return a.name.localeCompare(b.name);
      case 'Имя Я-А':
        return b.name.localeCompare(a.name);
      case 'Сначала моложе':
        return getAgeFromBirthday(a.birthday) - getAgeFromBirthday(b.birthday);
      case 'Сначала старше':
        return getAgeFromBirthday(b.birthday) - getAgeFromBirthday(a.birthday);
      case 'Низкий рейтинг':
        return a.rating - b.rating;
      case 'Высокий рейтинг':
        return b.rating - a.rating;
      default:
        return 0;
    }
  }

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
        {store.students &&
          store.students
            .filter((student) => student.name.toLowerCase().includes(store.input.toLowerCase()))
            .sort((a, b) => sortBy(a, b, store.sortType))
            .map((student) => <Students key={student.id} {...student} />)}
      </MainStudentsWrapper>
    </MainContent>
  );
};

export default observer(Page);
