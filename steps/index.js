function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      column <= row ? (stair += '#') : (stair += ' ');
    }
    console.log(stair);
  }
}

module.exports = steps;
