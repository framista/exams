import {
  ADD_FILTER,
  CLEAR_FILTERS,
  DELETE_FILTER,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
  SORT,
} from '../types';
import initialState from './initial';

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
