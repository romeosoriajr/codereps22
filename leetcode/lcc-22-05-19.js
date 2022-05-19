function longestIncreasingPath(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));

  let result = -1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, helper(i, j, -1));
    }
  }

  return result;

  function helper(row, col, prev) {
    if (0 > row || row >= m || 0 > col || col >= n || matrix[row][col] <= prev)
      return 0;

    if (dp[row][col] == -1) {
      const values = directions.map(([a, b]) =>
        helper(row + a, col + b, matrix[row][col])
      );

      dp[row][col] = Math.max(...values) + 1;
    }

    return dp[row][col];
  }
}

