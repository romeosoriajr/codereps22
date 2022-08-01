function uniquePaths(m, n) {
  const paths = new Array(m).fill(null).map(() => new Array(n).fill(null));

  for (let j = 0; j < n; j++) {
    paths[0][j] = 1;
  }

  for (let i = 0; i < m; i++) {
    paths[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
    }
  }

  return paths[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));
