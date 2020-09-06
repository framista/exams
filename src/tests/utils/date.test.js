import { getDateForXDays, formatDate, formatNumber } from '../../utils/date';
import { set, reset } from 'mockdate';

describe('getDateForXDays', () => {
  const date = '2020-04-03T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should return yesterday date for parameter -1', () => {
    const result = getDateForXDays(-1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBe(2);
  });
  it('should return today date for parameter 1', () => {
    const result = getDateForXDays(1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBe(4);
  });
  it('should return current date for parameter 0', () => {
    const result = getDateForXDays(0);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBe(3);
  });
});

describe('formatDate', () => {
  it('should return 04.11.2012', () => {
    const result = formatDate('Sun Nov 04 2012 00:00:00 GMT+0100');
    expect(result).toBe('04.11.2012');
  });
});

describe('formatNumber', () => {
  it('should return a number if number is greather or equal 10', () => {
    const result = formatNumber(10);
    expect(result).toBe(10);
  });
  it('should return 0 and number if number is less than 10', () => {
    const result = formatNumber(9);
    expect(result).toBe('09');
  });
});
