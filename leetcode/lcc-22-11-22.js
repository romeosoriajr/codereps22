function numSquares(num) {
  const dp = new Array(num + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  let i = 1;

  while (i <= n) {
    let min = Number.MAX_SAFE_INTEGER;
    let j = 1;

    while (i - j ** 2 >= 0) {
      min = Math.min(min, dp[i - j ** 2] + 1);
      j++;
    }

    dp[i++] = min;
  }

  return dp[num];
}


