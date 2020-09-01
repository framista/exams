import { ADD_FILTER, CLEAR_FILTERS, DELETE_FILTER, ADD_EXAM } from '../types';

export const addFilter = (filter) => ({ type: ADD_FILTER, payload: filter });

export const deleteFilter = (filter) => ({
  type: DELETE_FILTER,
  payload: filter,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });

export const addExam = (exam) => ({ type: ADD_EXAM, payload: exam });
