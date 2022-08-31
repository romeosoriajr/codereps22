function pacificAtlantic(heights) {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const result = [];

  const pacVisited = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(false));
  const atlVisited = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    helper(i, 0, pacVisited);
    helper(i, n - 1, atlVisited);
  }

  for (let j = 0; j < n; j++) {
    helper(0, j, pacVisited);
    helper(m - 1, j, atlVisited);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacVisited[i][j] && atlVisited[i][j]) result.push([i, j]);
    }
  }

  return result;

  function helper(i, j, visited) {
    visited[i][j] = true;

    for (let [a, b] of directions) {
      const [x, y] = [i + a, j + b];

      if (
        x < 0 ||
        y < 0 ||
        x >= m ||
        y >= n ||
        visited[x][y] ||
        heights[x][y] < heights[i][j]
      )
        continue;

      helper(x, y, visited);
    }
  }
}
