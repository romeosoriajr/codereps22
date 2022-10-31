function isToeplitzMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] != matrix[row - 1][col - 1]) return false;
    }
  }

  return true;
}

