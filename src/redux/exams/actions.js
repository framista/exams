import { ADD_FILTER, CLEAR_FILTERS, DELETE_FILTER } from '../types';

export const addFilter = (filter) => ({ type: ADD_FILTER, payload: filter });

export const deleteFilter = (filter) => ({
  type: DELETE_FILTER,
  payload: filter,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });
