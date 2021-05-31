const { reverseLoop, reverseCheat } = require('./index');

test('Reverse function exists', () => {
  expect(reverseLoop).toBeDefined();
  expect(reverseCheat).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseLoop('abcd')).toEqual('dcba');
  expect(reverseCheat('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseLoop('  abcd')).toEqual('dcba  ');
  expect(reverseCheat('  abcd')).toEqual('dcba  ');
});
