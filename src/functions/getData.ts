import store from '../store';

export const onLoadStudents = () => {
  fetch('https://front-assignment-api.2tapp.cc/api/persons')
    .then((resp) => resp.json())
    .then((json) => {
      store.getStudents(json.students);
    });
};
