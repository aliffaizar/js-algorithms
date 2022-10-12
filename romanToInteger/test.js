const romanToInteger = require('./index');

test('Roman To Integer function is defined', () => {
  expect(romanToInteger).toBeDefined();
});

test('Roman To Integer', () => {
  expect(romanToInteger('III')).toEqual(3);
});
test('Roman To Integer', () => {
  expect(romanToInteger('IV')).toEqual(4);
});
test('Roman To Integer', () => {
  expect(romanToInteger('IX')).toEqual(9);
});
test('Roman To Integer', () => {
  expect(romanToInteger('XIX')).toEqual(19);
});
test('Roman To Integer', () => {
  expect(romanToInteger('CM')).toEqual(900);
});
test('Roman To Integer', () => {
  expect(romanToInteger('MCM')).toEqual(1900);
});
test('Roman To Integer', () => {
  expect(romanToInteger('MMCMXIII')).toEqual(2913);
});
