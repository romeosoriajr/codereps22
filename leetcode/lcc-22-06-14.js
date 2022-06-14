function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else {
        dp[i][j] =
          word1.charAt(i - 1) == word2.charAt(j - 1)
            ? dp[i - 1][j - 1] + 1
            : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const length = dp[m][n];

  return m - length + n - length;
}


