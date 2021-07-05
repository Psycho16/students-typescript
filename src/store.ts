import { makeAutoObservable } from 'mobx';
import { sortBy } from './functions/manipulateStudents';

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

export const filterStudents = (students: student[], input: string) => {
  return students.filter((student) => student.name.toLowerCase().includes(input.toLowerCase()));
};

export const sortStudents = (students: student[], sortType: string) => {
  return students.sort((a, b) => sortBy(a, b, sortType));
};

class Store {
  students: student[] = [];
  studentsForView: student[] = [];
  input: string = '';
  sortType: string = 'Имя А-Я';

  constructor() {
    makeAutoObservable(this);
  }
  deleteStudent(id: number) {
    this.students = deleteStudent(this.students, id);
    this.studentsForView = filterStudents(this.students, this.input);
    this.studentsForView = sortStudents(this.studentsForView, this.sortType);
  }
  getStudents(students: student[]) {
    this.students = students;
    this.studentsForView = students;
  }
  setSortType(label: string) {
    this.studentsForView = sortStudents(this.studentsForView, label);
    this.sortType = label;
  }
  setInput(input: string) {
    this.studentsForView = filterStudents(this.students, input);
    this.studentsForView = sortStudents(this.studentsForView, this.sortType);
    this.input = input;
  }
}

const store = new Store();

export default store;
