const toUnderscore = require('./toUnderscore');

test('TestController', () => {
  expect(toUnderscore('TestController')).toBe('test_controller');
});

test('TestController', () => {
  expect(toUnderscore('MoviesAndBooks')).toBe('movies_and_books');
});

test('TestController', () => {
  expect(toUnderscore('App7Test')).toBe('app7_test');
});
