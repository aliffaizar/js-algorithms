// Given a string should be return new string with the reversed string
// -- Example --
// reverse('abcd') === 'dcba'
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'

// first solution
function reverse1(string) {
  let reversed = '';
  for (let char of string) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverse1('abcdef!'));

// second solution
function reverse2(string) {
  return string.split('').reduce((rev, char) => char + rev, '');
}
console.log(reverse2('abcdef!'));

// third solution;
function reverse3(string) {
  return string.split('').reverse().join('');
}

module.exports = reverse3;
