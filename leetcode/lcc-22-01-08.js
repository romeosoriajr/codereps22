function cherryPickup(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(null).map(() => new Array(n).fill(-1)));

  let r1 = 0;
  let r2 = n - 1;
  dp[0][r1][r2] = grid[0][r1] + grid[0][r2];

  let max = dp[0][r1][r2];

  for (let i = 1; i < m; i++) {
    for (let c1 = 0; c1 < n; c1++) {
      for (let c2 = 0; c2 < n; c2++) {
        let prev = dp[i - 1][c1][c2];
        if (prev >= 0) {
          for (let d1 = -1; d1 <= 1; d1++) {
            r1 = c1 + d1;

            for (let d2 = -1; d2 <= 1; d2++) {
              r2 = c2 + d2;

              if (inRange(r1, n) && inRange(r2, n)) {
                const onSamePos =
                  r1 == r2 ? grid[i][r1] : grid[i][r1] + grid[i][r2];
                dp[i][r1][r2] = Math.max(dp[i][r1][r2], onSamePos + prev);
                max = Math.max(max, dp[i][r1][r2]);
              }
            }
          }
        }
      }
    }
  }

  return max;

  function inRange(pos, range) {
    return 0 <= pos && pos < range;
  }
}
