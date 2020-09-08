import {
  getBackgroundCard,
  getStatusExam,
  getFilteredExams,
  getSortedExams,
  getSubjectsStatisitcs,
  getUniqueExamWithProperty,
} from '../../utils/examLogic';
import { set, reset } from 'mockdate';
import { getExams } from '../fixtures/exams';

describe('test getBackgroundCard', () => {
  const date = '2020-04-03T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should return danger if grade is equal to 1', () => {
    const result = getBackgroundCard('1', date);
    expect(result).toBe('danger');
  });
  it('should return success if grade is bigger than 1', () => {
    const result = getBackgroundCard('2', date);
    expect(result).toBe('success');
  });
  it('should return warning if date is less than in 7 days and there is no grade', () => {
    const result = getBackgroundCard('', new Date(2020, 3, 10));
    expect(result).toBe('warning');
  });
  it('should return secondary if date is less than today and there is no grade', () => {
    const result = getBackgroundCard('', new Date(2020, 3, 3));
    expect(result).toBe('secondary');
  });
  it('should return info if date is bigger than 7 days and there is no grade', () => {
    const result = getBackgroundCard('', new Date(2020, 3, 11));
    expect(result).toBe('info');
  });
});

describe('test getStatusExam', () => {
  const date = '2020-04-03T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should return failed if grade is equal to 1', () => {
    const result = getStatusExam('1', date);
    expect(result).toBe('failed');
  });
  it('should return passed if grade is bigger than 1', () => {
    const result = getStatusExam('2', date);
    expect(result).toBe('passed');
  });
  it('should return noResult if there is no grade and date is less than today', () => {
    const result = getStatusExam('', new Date(2020, 3, 2));
    expect(result).toBe('noResult');
  });
  it('should return future if there is no grade and date is equal or bigger than today', () => {
    const result = getStatusExam('', new Date(2020, 3, 3, 21));
    expect(result).toBe('future');
  });
});

describe('test getFilteredExams', () => {
  it('should return exams without changes if filters array is empty', () => {
    const exams = getExams();
    const result = getFilteredExams(exams, []);
    expect(result).toEqual(exams);
  });
  it('should return exam which has grade 1 if filters contain failed', () => {
    const filters = ['failed'];
    const exams = getExams();
    const result = getFilteredExams(exams, filters);
    expect(result).toEqual([exams[3]]);
  });
  it('should return exams which are failed or have no result', () => {
    const exams = getExams();
    const filters = ['failed', 'noResult'];
    const result = getFilteredExams(exams, filters);
    expect(result).toEqual([exams[3], exams[5]]);
  });
});

describe('test getSortedExams', () => {
  it('should return exams without changes if sortType is not date nor subject', () => {
    const exams = getExams();
    const result = getSortedExams(exams, '');
    expect(result).toEqual(exams);
  });
  it('should return exams sorted by date', () => {
    const exams = getExams();
    const sortedExams = [
      exams[8],
      exams[7],
      exams[9],
      exams[6],
      exams[5],
      exams[4],
      exams[2],
      exams[3],
      exams[1],
      exams[0],
    ];
    const result = getSortedExams(exams, 'date');
    expect(result).toEqual(sortedExams);
  });
  it('should return exams sorted by subject', () => {
    const exams = getExams();
    const sortedExams = [
      exams[9],
      exams[8],
      exams[3],
      exams[2],
      exams[5],
      exams[7],
      exams[1],
      exams[0],
      exams[4],
      exams[6],
    ];
    const result = getSortedExams(exams, 'subject');
    expect(result).toEqual(sortedExams);
  });
});

describe('test getSubjectsStatisitcs', () => {
  it('should return statistics', () => {
    const exams = getExams();
    const result = getSubjectsStatisitcs(exams);
    expect(result).toEqual([
      {
        amount: 2,
        subject: 'matematyka',
        sum: 5,
      },
      {
        amount: 1,
        subject: 'język polski',
        sum: 5,
      },
      {
        amount: 1,
        subject: 'historia',
        sum: 3,
      },
      {
        amount: 1,
        subject: 'chemia',
        sum: 1,
      },
      {
        amount: 0,
        subject: 'biologia',
        sum: 0,
      },
      {
        amount: 0,
        subject: 'angielski',
        sum: 0,
      },
    ]);
  });
});

describe('test getUniqueExamWithProperty', () => {
  it('should return all unique subjects', () => {
    const exams = getExams();
    const result = getUniqueExamWithProperty(exams, 'subject');
    expect(result).toEqual([
      'matematyka',
      'język polski',
      'historia',
      'chemia',
      'biologia',
      'angielski',
    ]);
  });
});
