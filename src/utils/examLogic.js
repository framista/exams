import { getDateForXDays } from './date';

export const getBackgroundCard = (grade, date) => {
  if (grade === 1) {
    return 'danger'; // fail
  }
  if (grade > 1) {
    return 'success'; // pass
  }
  if (date >= new Date() && date < getDateForXDays(7)) {
    return 'warning'; // in this 7 days
  }
  if (date < new Date() && grade === '') {
    return 'secondary'; // written without grade
  }
  return 'info'; // future
};

export const getStatusExam = (grade, date) => {
  if (grade === 1) {
    return 'failed';
  }
  if (grade > 2) {
    return 'passed';
  }
  if (date < new Date()) {
    return 'noResult';
  }
  return 'future';
};

export const getFilteredExams = (exams, filters) => {
  if (filters.length === 0) {
    return exams;
  }
  const filteredExams = exams.filter((exam) => {
    const { grade, date } = exam;
    const status = getStatusExam(grade, date);
    if (filters.includes(status)) return exam;
  });
  return filteredExams;
};

export const getSortedExams = (exams, sortType) => {
  switch (sortType) {
    case 'date':
      return exams.sort((a, b) => new Date(b.date) - new Date(a.date));
    case 'subject':
      return exams.sort((a, b) => {
        if (a.subject.toLowerCase() < b.subject.toLowerCase()) {
          return -1;
        }
        if (a.subject.toLowerCase() > b.subject.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    default:
      return exams;
  }
};
