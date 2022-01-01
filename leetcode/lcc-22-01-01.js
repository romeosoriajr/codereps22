function maxCoins(nums) {
  const n = nums.length;
  const values = new Array(n+2).fill(null);
  values[0] = 1;
  values[n+1] = 1;

  for (let i=1; i <= n; i++) {
    values[i] = nums[i-1];
  }

  const dp = new Array(n + 2).fill(null).map(() => new Array(n + 2).fill(null));

  for (let w = 1; w <= n; w++) {
    for (let l = 1; l <= n - w + 1; l++) {
      const r = l + w - 1;

      for (let i = l; i <= r; i++) {
        const popped = values[l - 1] * values[i] * values[r + 1];
        dp[l][r] = Math.max(dp[l][r], dp[l][i - 1] + popped + dp[i + 1][r]);
      }
    }
  }

  return dp[1][n];
}

const nums = [3, 1, 5, 8];

console.log(maxCoins(nums));
