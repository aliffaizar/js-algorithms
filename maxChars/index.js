function maxChars(string) {
  const charObj = {};
  let maxVal = 0;
  let maxChar = '';
  for (let char of string) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  for (let char in charObj) {
    if (charObj[char] > maxVal) {
      maxVal = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChars;
