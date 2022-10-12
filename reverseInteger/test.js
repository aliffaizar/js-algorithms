const { reverseInteger1, reverseInteger2 } = require('./index');

test('First reverse function is defined', () => {
  expect(reverseInteger1).toBeDefined();
});

test('Second reverse function is defined', () => {
  expect(reverseInteger2).toBeDefined();
});

test('First reverse function handles 0 is an input', () => {
  expect(reverseInteger1(0)).toEqual(0);
});

test('Second reverse function handles 0 is an input', () => {
  expect(reverseInteger2(0)).toEqual(0);
});

test('First reverse function handles positive numbers', () => {
  expect(reverseInteger1(10)).toEqual(1);
  expect(reverseInteger1(5)).toEqual(5);
  expect(reverseInteger1(15)).toEqual(51);
  expect(reverseInteger1(90)).toEqual(9);
  expect(reverseInteger1(123)).toEqual(321);
  expect(reverseInteger1(78923)).toEqual(32987);
});
test('Second reverse function handles positive numbers', () => {
  expect(reverseInteger2(-10)).toEqual(-1);
  expect(reverseInteger2(-5)).toEqual(-5);
  expect(reverseInteger2(-15)).toEqual(-51);
  expect(reverseInteger2(-90)).toEqual(-9);
  expect(reverseInteger2(-123)).toEqual(-321);
  expect(reverseInteger2(-78923)).toEqual(-32987);
});
