export const getDateForXDays = (number) => {
  const now = new Date();
  now.setDate(now.getDate() + number);
  return now;
};

export const formatDate = (date) => {
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const formatNumber = (number) => (number < 10 ? '0' + number : number);
