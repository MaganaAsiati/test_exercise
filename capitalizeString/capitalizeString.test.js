const capitalizeString = require('./capitalizeString.js');

test('Capitalize first letter of a string', () => {
  expect(capitalizeString('coding')).toBe('Coding');
});

test('Capitalize first letter of a string', () => {
  expect(capitalizeString('Happy')).toBe('Happy');
});