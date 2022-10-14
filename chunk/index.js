function chunk1(array, size) {
  const chunked = [];
  for (let num of array) {
    let lastEl = chunked[chunked.length - 1];
    if (!lastEl || lastEl.length === size) {
      chunked.push([num]);
    } else {
      lastEl.push(num);
    }
  }
  return chunked;
}

function chunk2(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = { chunk1, chunk2 };
