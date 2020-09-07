import initialState from '../../../redux/exams/initial';
import reducer from '../../../redux/exams/reducer';
import {
  ADD_FILTER,
  CLEAR_FILTERS,
  DELETE_FILTER,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
  SORT,
} from '../../../redux/types';

describe('test exams reducer', () => {
  it('should setup default exams values', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });
  it('should add filter', () => {
    const filter = 'subject';
    const action = { type: ADD_FILTER, payload: filter };
    const state = reducer(undefined, action);
    expect(state.filters).toContain(filter);
  });
  it('should delete all filters', () => {
    const currentState = {
      allExams: [],
      sort: '',
      filters: ['failed', 'passed', 'noResult'],
    };
    const state = reducer(currentState, { type: CLEAR_FILTERS });
    expect(state.filters).toEqual([]);
  });
  it('should delete selected filter', () => {
    const currentState = {
      allExams: [],
      sort: '',
      filters: ['failed', 'passed', 'noResult'],
    };
    const filter = 'passed';
    const action = { type: DELETE_FILTER, payload: filter };
    const state = reducer(currentState, action);
    expect(state.filters).not.toContain(filter);
  });
  it('should add an exam', () => {
    const currentState = {
      allExams: [],
      sort: '',
      filters: ['failed', 'passed', 'noResult'],
    };
    const exam = {
      subject: 'maths',
      grade: '',
      teacher: 'John Doe',
      id: '1a3',
    };
    const action = { type: ADD_EXAM, payload: exam };
    const state = reducer(currentState, action);
    expect(state.allExams).toContain(exam);
  });
  it('should update exam', () => {
    const currentState = {
      allExams: [
        {
          subject: 'maths',
          grade: '',
          teacher: 'John Doe',
          id: '1a3',
        },
        {
          subject: 'german',
          grade: '2',
          teacher: 'Peter Paul',
          id: '2a3',
        },
        {
          subject: 'chemistry',
          grade: '',
          teacher: 'Katrin Queen',
          id: '3a3',
        },
      ],
      sort: '',
      filters: [],
    };
    const updateExam = {
      subject: 'polish',
      grade: '5',
      teacher: 'Tom Weber',
      id: '2a3',
    };
    const action = { type: UPDATE_EXAM, payload: updateExam };
    const state = reducer(currentState, action);
    expect(state.allExams[1]).toEqual(updateExam);
  });
  it('should delete exam by id', () => {
    const currentState = {
      allExams: [
        {
          subject: 'maths',
          grade: '',
          teacher: 'John Doe',
          id: '1a3',
        },
        {
          subject: 'german',
          grade: '2',
          teacher: 'Peter Paul',
          id: '2a3',
        },
        {
          subject: 'chemistry',
          grade: '',
          teacher: 'Katrin Queen',
          id: '3a3',
        },
      ],
      sort: '',
      filters: [],
    };
    const id = '2a3';
    const action = { type: DELETE_EXAM, payload: id };
    const state = reducer(currentState, action);
    expect(state.allExams.length).toBe(2);
    expect(state.allExams).not.toContain(currentState.allExams[1]);
  });
  it('should set sort value', () => {
    const sort = 'date';
    const action = { type: SORT, payload: sort };
    const state = reducer(undefined, action);
    expect(state.sort).toBe(sort);
  });
});
