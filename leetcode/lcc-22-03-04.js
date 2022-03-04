function champagneTower(poured, query_row, query_glass) {
  const dp = new Array(query_row + 1)
    .fill(null)
    .map(() => new Array(query_glass + 2).fill(null));

  dp[0][0] = poured;

  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= query_glass; j++) {
      const spill = Math.max(dp[i][j] - 1.0, 0);
      dp[i + 1][j] += spill / 2.0;
      dp[i + 1][j + 1] += spill / 2.0;
    }
  }

  return Math.min(dp[query_row][query_glass], 1.0);
}

