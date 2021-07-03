import React from 'react';
import './App.css';
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
import { Students, Search } from './components/';

import { observer } from 'mobx-react';
import store from './store';

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

const App: React.FC = () => {
  // Получаем возраст из даты рождения
  function getAge(birthday: string): number {
    const [year, month, day]: string[] = birthday.split('-');
    const today: Date = new Date();
    const dateBirthday: Date = new Date(+year, +month, +day);
    let age: number = today.getFullYear() - dateBirthday.getFullYear();
    const m: number = today.getMonth() - (dateBirthday.getMonth() - 1); // вычитаем, т.к. в JSе отсчет месяцев начинается с 0

    return m < 0 || (m === 0 && today.getDate() < dateBirthday.getDate()) ? --age : age;
  }

  function sortBy(a: student, b: student, type: string): number {
    switch (type) {
      case 'Имя А-Я':
        return a.name.localeCompare(b.name);
      case 'Имя Я-А':
        return b.name.localeCompare(a.name);
      case 'Сначала моложе':
        return getAge(a.birthday) - getAge(b.birthday);
      case 'Сначала старше':
        return getAge(b.birthday) - getAge(a.birthday);
      case 'Низкий рейтинг':
        return a.rating - b.rating;
      case 'Высокий рейтинг':
        return b.rating - a.rating;
      default:
        return 0;
    }
  }
  const onLoad = () => {
    fetch('https://front-assignment-api.2tapp.cc/api/persons')
      .then((resp) => resp.json())
      .then((json) => {
        store.getStudents(json.students);
      });
  };
  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
};

export default observer(App);
