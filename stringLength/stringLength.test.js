const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('string length should return a number', () => {
    expect(typeof stringLength('list5464')).toBe('number');
  });
  test('string length of 6 should be equal to 6', () => {
    expect(stringLength('string')).toEqual(6);
  });

  test('string length greater than 10 should return error', () => {
    expect(() => {
      stringLength('inspirational');
    }).toThrow('String must be between 1 and 10 characters long');
  });
});