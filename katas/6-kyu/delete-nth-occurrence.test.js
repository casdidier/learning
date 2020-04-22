const deleteNth = require('./delete-nth-occurrence');

test('containsDuplicate', () => {
  expect(deleteNth([20, 37, 20, 21])).toBe([20, 37, 21]);
});

test('containsDuplicate', () => {
  expect(deleteNth(([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))).toBe([1, 1, 3, 3, 7, 2, 2, 2]);
});
