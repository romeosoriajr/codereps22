class NumMatrix {
  constructor(matrix) {
    const m = matrix.length;
    this.matrix = [];

    for (let i = 0; i < m; i++) {
      const row = matrix[i];
      this.matrix.push([...row]);
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = 0;

    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }

    return sum;
  }
}


