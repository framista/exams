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
