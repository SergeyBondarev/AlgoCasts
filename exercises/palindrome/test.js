const { palindrome, palindromeNaive, palindromeArrayHelper }= require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
  expect(typeof palindromeNaive).toEqual('function');
  expect(typeof palindromeArrayHelper).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
  expect(palindromeNaive('aba')).toBeTruthy();
  expect(palindromeArrayHelper('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
  expect(palindromeNaive(' aba')).toBeFalsy();
  expect(palindromeArrayHelper(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
  expect(palindromeNaive('aba ')).toBeFalsy();
  expect(palindromeArrayHelper('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
  expect(palindromeNaive('greetings')).toBeFalsy();
  expect(palindromeArrayHelper('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
  expect(palindromeNaive('1000000001')).toBeTruthy();
  expect(palindromeArrayHelper('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
  expect(palindromeNaive('Fish hsif')).toBeFalsy();
  expect(palindromeArrayHelper('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
  expect(palindromeNaive('pennep')).toBeTruthy();
  expect(palindromeArrayHelper('pennep')).toBeTruthy();
});
