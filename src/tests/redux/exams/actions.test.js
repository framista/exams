import {
  ADD_FILTER,
  CLEAR_FILTERS,
  DELETE_FILTER,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
  SORT,
} from '../../../redux/types';
import {
  addFilter,
  deleteFilter,
  clearFilters,
  addExam,
  updateExam,
  deleteExam,
  sortExams,
} from '../../../redux/exams/actions';

// filters for

test('should generate add filter action object', () => {
  const action = addFilter('failed');
  expect(action).toEqual({
    type: ADD_FILTER,
    payload: 'failed',
  });
});

test('should generate remove filter action object', () => {
  const action = deleteFilter('failed');
  expect(action).toEqual({
    type: DELETE_FILTER,
    payload: 'failed',
  });
});

test('should generate clear filters action object', () => {
  const action = clearFilters();
  expect(action).toEqual({
    type: CLEAR_FILTERS,
  });
});

// exams

test('should generate add exam action object', () => {
  const exam = { subject: 'maths', grade: '5', teacher: 'John Doe' };
  const action = addExam(exam);
  expect(action).toEqual({ type: ADD_EXAM, payload: exam });
});

test('should generate update exam action object', () => {
  const exam = { subject: 'maths', grade: '5', teacher: 'John Doe' };
  const action = updateExam(exam);
  expect(action).toEqual({ type: UPDATE_EXAM, payload: exam });
});

test('should generate delete exam action object', () => {
  const action = deleteExam(12);
  expect(action).toEqual({ type: DELETE_EXAM, payload: 12 });
});

// sort

test('should generate sort exam action object', () => {
  const action = sortExams('date');
  expect(action).toEqual({ type: SORT, payload: 'date' });
});
