function shiftGrid(grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const result = new Array(m).fill(null).map(() => new Array(n).fill(null));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const jShift = (j + k) % n;
      const iShift = Math.floor(i + (j + k) / n) % m;

      result[iShift][jShift] = grid[i][j];
    }
  }

  return result;
}
