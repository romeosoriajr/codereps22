function findBall(grid) {
  let n = grid[0].length;
  const ans = new Array(n).fill(-1);

  for (let i = 0; i < ans.length; i++) {
    ans[i] = dfs(0, i);
  }

  return ans;

  function dfs(r, c) {
    if (
      (grid[r][c] === 1 && grid[r][c + 1] === -1) ||
      (grid[r][c] === -1 && grid[r][c - 1] === 1)
    ) {
      return -1;
    }

    if (grid[r][c] === -1 && c - 1 < 0) return -1;
    if (grid[r][c] === 1 && c + 1 >= grid[0].length) return -1;

    if (r === grid.length - 1) {
      if (grid[r][c] === 1) return c + 1;
      return c - 1;
    }

    if (grid[r][c] === 1) {
      return dfs(r + 1, c + 1);
    }
    return dfs(r + 1, c - 1);
  }
}
