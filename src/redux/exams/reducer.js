import {
  ADD_FILTER,
  CLEAR_FILTERS,
  DELETE_FILTER,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
  SORT,
} from '../types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  filters: ['failed'],
  sort: '',
  allExams: [
    {
      id: uuidv4(),
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. - przyszłość',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 10, 15),
      grade: '2',
    },
    {
      id: uuidv4(),
      subject: 'historia',
      unit: 'królowie polski',
      tasks: 'Królowie z dynastii Piastów i daty ich koronacji dzisiaj',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 7, 31),
      grade: '',
    },
    {
      id: uuidv4(),
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. wczoraj',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 7, 30),
      grade: '6',
    },
    {
      id: uuidv4(),
      subject: 'historia',
      unit: 'królowie polski',
      tasks:
        'Królowie z dynastii Piastów i daty ich koronacji przeszłość 1  sfd lmkd sg',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 5, 12),
      grade: '1',
    },
    {
      id: uuidv4(),
      subject: 'matematyka',
      unit: 'równianie kwadratowe',
      tasks: 'Obliczanie delty i wyznaczenie pierwiastków. za mniej niż 7 dni',
      teacher: 'Tomasz Matyski',
      date: new Date(2020, 8, 2),
      grade: '',
    },
    {
      id: uuidv4(),
      subject: 'historia',
      unit: 'królowie polski',
      tasks:
        'Królowie z dynastii Piastów i daty ich koronacji przeszłość nieoceniona',
      teacher: 'Halina Wielkopolska',
      date: new Date(2020, 1, 1),
      grade: '4',
    },
    {
      id: uuidv4(),
      subject: 'chemia',
      unit: 'kwasy',
      tasks: 'Reakcje i zastosowanie kwasów',
      teacher: 'Karolina Głogowska',
      date: new Date(2020, 1, 1),
      grade: '3',
    },
    {
      id: uuidv4(),
      subject: 'biologia',
      unit: 'anatomia',
      tasks: 'Budowa serca i działanie układu krążenia',
      teacher: 'Maria Kałuża',
      date: new Date(2020, 9, 2),
      grade: '4',
    },
    {
      id: uuidv4(),
      subject: 'angielski',
      unit: 'Miejsce zamieszkania',
      tasks: 'Opis domu i miasta rodzinnego',
      teacher: 'Damian Tomilik',
      date: new Date(2020, 9, 2),
      grade: '',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: [],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.payload),
      };
    case ADD_EXAM:
      return {
        ...state,
        allExams: [action.payload, ...state.allExams],
      };
    case UPDATE_EXAM:
      return {
        ...state,
        allExams: state.allExams.map((exam) =>
          exam.id === action.payload.id ? action.payload : exam
        ),
      };
    case DELETE_EXAM:
      return {
        ...state,
        allExams: state.allExams.filter(({ id }) => id !== action.payload),
      };
    case SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
