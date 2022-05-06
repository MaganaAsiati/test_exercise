const reverseString = require('./reverseString.js');

describe('reverseString', () => {
  test('Should return a reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Should return a reverse string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('Should return a reverse string', () => {
    expect(reverseString('123456')).toBe('654321');
  });
});