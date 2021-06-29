import React from 'react';
import deleteIcon from './deleteIcon.svg';
import ratingStar from './ratingStar.svg';
import listPoint from './ListPoint.svg';
import {
  StudentWrapper,
  StudentAvatar,
  StudentName,
  SeparatingLine,
  StudentSpecialty,
  StudentGroup,
  StudentAge,
  StudentRatingAndColor,
  StudentRating,
  RatingStar,
  ListPoint,
  AgeWord,
  StudentColor,
  DeleteButton,
} from './StyledStudents';

import { observer } from 'mobx-react';
import store from '../../store';

interface students {
  id: number;
  avatar: string;
  name: string;
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
}

const Students: React.FC<students> = ({
  id,
  avatar,
  name,
  specialty,
  group,
  color,
  rating,
  birthday,
}) => {
  const specialties: string[] = ['mt', 'kb', 'kn'];
  const rusSpecialties: string[] = [
    'Математика',
    'Компьютерная безопасность',
    'Компьютерные науки',
  ];
  const rusGroups: string[] = ['МТ', 'КБ', 'КН'];
  const colors: string[] = ['green', 'blue', 'red', 'black', 'yellow', 'orange'];
  const layoutColors: string[] = ['#83C872', '#49C2E8', '#E25B5B', '#000000', '#F7FB53', '#EFA638'];

  // получаем специальность на русском языке
  function getRusSpecialty(specialty: string): string {
    return rusSpecialties[specialties.indexOf(specialty)];
  }
  // получаем группу на русском языке
  function getRusGroup(group: string): string {
    const [abbr, num]: string[] = group.split('-');
    return `${rusGroups[specialties.indexOf(abbr)]}-${num}`;
  }
  // Получаем возраст из даты рождения
  function getAge(birthday: string): number {
    const [year, month, day]: string[] = birthday.split('-');
    const today: Date = new Date();
    const dateBirthday: Date = new Date(+year, +month, +day);
    let age: number = today.getFullYear() - dateBirthday.getFullYear();
    const m: number = today.getMonth() - (dateBirthday.getMonth() - 1); // вычитаем, т.к. в JSе отсчет месяцев начинается с 0

    return m < 0 || (m === 0 && today.getDate() < dateBirthday.getDate()) ? --age : age;
  }
  // смена цвета на тот, который был в макете
  function getLayoutColor(color: string): string {
    return layoutColors[colors.indexOf(color)];
  }

  function plural(number: number) {
    const titles: string[] = ['год', 'года', 'лет'];
    const cases: number[] = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  // переменные для вывода на страницу
  const rusSpecialty: string = getRusSpecialty(specialty);
  const rusGroup: string = getRusGroup(group);
  const age: number = getAge(birthday);
  const layoutColor: string = getLayoutColor(color);
  const ageWord = plural(age);

  return (
    <StudentWrapper>
      <StudentAvatar alt="student" src={avatar} />
      <StudentName>{name}</StudentName>
      <SeparatingLine />
      <StudentSpecialty>
        <ListPoint src={listPoint} />
        {rusSpecialty}
      </StudentSpecialty>
      <StudentGroup>
        <ListPoint src={listPoint} />
        {rusGroup}
      </StudentGroup>
      <StudentAge>
        <ListPoint src={listPoint} />
        {age}
        <AgeWord>{ageWord}</AgeWord>
      </StudentAge>
      <StudentRatingAndColor>
        <StudentRating>
          <RatingStar src={ratingStar} />
          {rating}
        </StudentRating>
        <StudentColor style={{ background: layoutColor }}></StudentColor>
      </StudentRatingAndColor>

      <DeleteButton src={deleteIcon} onClick={() => store.deleteStudent(id)} />
    </StudentWrapper>
  );
};

export default observer(Students);
