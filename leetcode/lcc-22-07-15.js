function maxAreaOfIsland(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let maxArea = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const state = grid[row][col];
      if (!state) continue;

      const area = helper(row, col);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;

  function helper(row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n) return 0;
    if (!grid[row][col]) return 0;
    let sum = 1;

    for (let [x, y] of directions) {
      grid[row][col] = 0;
      sum += helper(row + y, col + x);
    }

    return sum;
  }
}
