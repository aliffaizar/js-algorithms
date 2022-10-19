function lengthLastWord(words) {
  let arr = words.trim().split(/\s+/);
  let word = arr[arr.length - 1].split('');
  return word.length;
}

module.exports = lengthLastWord;
