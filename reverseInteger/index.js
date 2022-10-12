// first solution
function reverseInteger1(int) {
  const reversed = int.toString().split('').reverse().join('');
  if (int < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

// second solution
function reverseInteger2(int) {
  const reversed = int.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(int);
}
console.log(reverseInteger2(0));

module.exports = { reverseInteger1, reverseInteger2 };
