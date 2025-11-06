function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix.push([i]);
  }
  let num = 1;
  let row = 0;
  let col = 0;
  while (num <= size * size) {
    matrix[row][col] = num;
    num += 1;
  }
  return matrix;
}

console.log(getSpiralMatrix(3));