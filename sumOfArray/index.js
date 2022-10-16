function sumOfArray1(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}

function sumOfArray2(arr) {
  return arr.reduce(
    (accumulator, currentValue, index, arr) => (arr[i] += accumulator)
  );
}

module.exports = { sumOfArray1, sumOfArray2 };
