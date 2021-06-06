import { makeAutoObservable } from 'mobx';

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
export const deleteStudent = (students: student[], id: number) => {
  return students.map((a) => a).filter((student) => student.id !== id);
};

export const sortStudents = (students: student[], sortType: string, sortBy: Function) => {
  return students.map((a) => a).sort((a, b) => sortBy(a, b, sortType));
};

// export const searchStudent = (students: student[], input: string) => {
//   return students.filter((student) => student.name.toLowerCase().includes(input.toLowerCase()));
// };

class Store {
  students: student[] = [];
  input: string = '';
  sortType: string = 'Имя А-Я';

  constructor() {
    makeAutoObservable(this);
  }
  deleteStudent(id: number) {
    this.students = deleteStudent(this.students, id);
  }
  getStudents(students: student[]) {
    this.students = students;
  }
  setSortType(label: string) {
    this.sortType = label;
  }
  setInput(input: string) {
    this.input = input;
  }

  sortStudents(sortType: string, sortBy: Function) {
    this.students = sortStudents(this.students, sortType, sortBy);
  }
  //   searchStudent() {
  //     this.students = searchStudent(this.students, this.input);
  //   }
}

const store = new Store();

export default store;
