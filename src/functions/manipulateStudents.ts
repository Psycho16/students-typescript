import { getAgeFromBirthday } from './getStudentInfo';
export interface student {
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

export function sortBy(a: student, b: student, type: string): number {
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
