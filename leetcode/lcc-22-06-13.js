function minimumTotal(triangle) {
  const n = triangle.length;

  const dp = new Array(n).fill(null).map(() => new Array(n).fill(-1));

  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      const up = triangle[i][j] + dp[i + 1][j];
      const upLeft = triangle[i][j] + dp[i + 1][j + 1];
      dp[i][j] = Math.min(up, upLeft);
    }
  }

  return dp[0][0];
}

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(triangle));
