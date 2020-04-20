const containsDuplicate = require('./contain-duplicates');

test('containsDuplicate', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('containsDuplicate', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('containsDuplicate', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
