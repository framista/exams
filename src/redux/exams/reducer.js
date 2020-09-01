import { ADD_EXAM } from '../types';

const initialState = {
  allExams: [
    {
      id: 1,
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. - przyszłość',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 10, 15),
      grade: '',
    },
    {
      id: 2,
      subject: 'historia',
      unit: 'królowie polski',
      tasks: 'Królowie z dynastii Piastów i daty ich koronacji dzisiaj',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 7, 31),
      grade: '',
    },
    {
      id: 3,
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. wczoraj',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 7, 30),
      grade: 6,
    },
    {
      id: 4,
      subject: 'historia',
      unit: 'królowie polski',
      tasks:
        'Królowie z dynastii Piastów i daty ich koronacji przeszłość 1  sfd lmkd sg',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 5, 12),
      grade: 1,
    },
    {
      id: 5,
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. za mniej niż 7 dni',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 8, 2),
      grade: '',
    },
    {
      id: 6,
      subject: 'historia',
      unit: 'królowie polski',
      tasks:
        'Królowie z dynastii Piastów i daty ich koronacji przeszłość nieoceniona',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 1, 1),
      grade: '',
    },
    {
      id: 7,
      subject: 'chemia',
      unit: 'kwasy',
      tasks: 'Reakcje i zastosowanie kwasów',
      teacher: 'Karolina Głogowska',
      date: new Date(2020, 1, 1),
      grade: '3',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
