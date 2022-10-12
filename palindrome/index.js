// first solution
function palindrome1(string) {
  return string === string.split('').reverse().join('');
}

// second solution
function palindrome2(string) {
  return string
    .split('')
    .every((char, i) => char === string[string.length - i - 1]);
}

module.exports = palindrome2;
