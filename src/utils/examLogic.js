import { getDateForXDays } from './date';

export const getBackgroundCard = (grade, dateParam) => {
  const date = new Date(dateParam);
  if (grade && parseInt(grade, 10) === 1) {
    return 'danger'; // fail
  }
  if (grade && parseInt(grade, 10) > 1) {
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

export const getStatusExam = (grade, dateParam) => {
  const date = new Date(dateParam);
  if (grade && parseInt(grade, 10) === 1) {
    return 'failed';
  }
  if (grade && parseInt(grade, 10) > 1) {
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
    return filters.includes(status);
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

export const getSubjectsStatisitcs = (exams) =>
  exams.reduce((acc, exam) => {
    const grade = Number.isInteger(parseInt(exam.grade))
      ? parseInt(exam.grade)
      : -1;
    const subjectIndex = acc.findIndex(
      (res) => res.subject === exam.subject.toLowerCase()
    );
    if (subjectIndex === -1) {
      const obj = {
        subject: exam.subject.toLowerCase(),
        sum: 0,
        amount: 0,
      };
      if (grade > 0) {
        obj.sum = grade;
        obj.amount = 1;
      }
      return [...acc, obj];
    } else {
      if (grade > 0) {
        acc[subjectIndex].sum += grade;
        acc[subjectIndex].amount++;
      }
      return [...acc];
    }
  }, []);
