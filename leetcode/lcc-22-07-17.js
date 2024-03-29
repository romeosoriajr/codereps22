function kInversePairs(n, k) {
  if (k > (n * (n - 1)) / 2) return 0;
  if (k == (n * (n - 1)) / 2 || k == 0) return 1;

  const mod = 10 ** 9 + 7;
  const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = 1;
    for (let j = 1; j < Math.min(k, (i * (i - 1)) / 2) + 1; j++) {
      dp[i][j] =
        (dp[i][j - 1] + dp[i - 1][j] - (j >= i ? dp[i - 1][j - i] : 0)) % mod;
      if (dp[i][j] < 0) dp[i][j] += mod;
    }
  }

  return dp[n][k];
}
