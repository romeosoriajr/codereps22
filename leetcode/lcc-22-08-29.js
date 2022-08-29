function numIslands(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = grid[i][j];

      if (val == "1") {
        helper(i, j);
        result++;
      }
    }
  }

  return result;

  function helper(row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] != "1")
      return;

    grid[row][col] = "2";

    for (let [y, x] of directions) {
      helper(row + x, col + y);
    }
  }
}
