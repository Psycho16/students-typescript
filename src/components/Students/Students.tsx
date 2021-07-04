import React from 'react';
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
import {
  getRusSpecialty,
  getRusGroup,
  getAgeFromBirthday,
  fixAgeWord,
} from '../../functions/getStudentInfo';
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
  const layoutColors = new Map();
  layoutColors.set('green', '#83C872');
  layoutColors.set('blue', '#49C2E8');
  layoutColors.set('red', '#E25B5B');
  layoutColors.set('black', '#000000');
  layoutColors.set('yellow', '#F7FB53');
  layoutColors.set('orange', '#EFA637');

  // переменные для вывода на страницу
  const rusSpecialty: string = getRusSpecialty(specialty, rusSpecialties, specialties);
  const rusGroup: string = getRusGroup(group, rusGroups, specialties);
  const age: number = getAgeFromBirthday(birthday);
  const layoutColor: string = layoutColors.get(color);
  const ageWord = fixAgeWord(age);

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

      <DeleteButton onClick={() => store.deleteStudent(id)} />
    </StudentWrapper>
  );
};

export default observer(Students);
