function transpose(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = new Array(n).fill(null).map(() => new Array(m).fill(null));

  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(matrix));
