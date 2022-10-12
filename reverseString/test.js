// check script at package.json to run this test

const reverse = require('./index');

test('Reverse function is defined', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse(' abcd')).toEqual('dcba ');
});
