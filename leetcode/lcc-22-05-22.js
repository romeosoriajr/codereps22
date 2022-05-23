function countSubstrings(s) {
  const n = s.length;

  const dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

  let result = 0;

  for (let length = 1; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      if (length == 1) {
        dp[i][i] = 1;
      } else if (length == 2) {
        if (s[i] == s[i + 1]) {
          dp[i][i + 1] = 1;
        } else {
          dp[i][i + 1] = 0;
        }
      } else if (s[i] == s[i + length - 1] && dp[i + 1][i + length - 2] > 0) {
        dp[i][i + length - 1] = 1;
      } else {
        dp[i][i + length - 1] = 0;
      }

      result += dp[i][i + length - 1];
    }
  }

  return result;
}

