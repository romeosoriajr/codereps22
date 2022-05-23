function findMaxForm(strs, m, n) {
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let str of strs) {
    let zero = 0;
    let one = 0;

    for (let char of str) {
      char == "0" ? zero++ : one++;
    }

    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }

  return dp[m][n];
};
