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
}

const store = new Store();

export default store;
