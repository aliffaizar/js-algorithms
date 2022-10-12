const palindrome = require('./index');

test('Palindrome function is defined', () => {
  expect(palindrome).toBeDefined();
});

test(`'abba' is a palindome`, () => {
  expect(palindrome('abba')).toBeTruthy();
});
test(`'apple' is not a palindome`, () => {
  expect(palindrome('apple')).toBeFalsy();
});
test(`'abcba' is a palindome`, () => {
  expect(palindrome('abcba')).toBeTruthy();
});
