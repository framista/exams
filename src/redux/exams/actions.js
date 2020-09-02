import {
  ADD_FILTER,
  CLEAR_FILTERS,
  DELETE_FILTER,
  ADD_EXAM,
  UPDATE_EXAM,
  SORT,
} from '../types';

// filters

export const addFilter = (filter) => ({ type: ADD_FILTER, payload: filter });

export const deleteFilter = (filter) => ({
  type: DELETE_FILTER,
  payload: filter,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });

// exams

export const addExam = (exam) => ({ type: ADD_EXAM, payload: exam });

export const updateExam = (exam) => ({ type: UPDATE_EXAM, payload: exam });

// sort

export const sortExams = (sortType) => ({ type: SORT, payload: sortType });
