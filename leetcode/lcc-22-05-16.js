function shortestPathBinaryMatrix(grid) {
  const n = grid.length;

  if (grid[0][0] || grid[n - 1][n - 1]) return -1;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];
  const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));
  visited[0][0] = true;
  var queue = [[0, 0, 1]];

  while (queue.length) {
    var [i, j, dist] = queue.shift();

    if (i == n - 1 && j == n - 1) return dist;

    for (let [n1, n2] of directions) {
      var x = i + n1;
      var y = j + n2;

      if (0 <= x && x < n && 0 <= y && y < n) {
        if (!visited[x][y] && grid[x][y] == 0) {
          visited[x][y] = true;
          queue.push([x, y, dist + 1]);
        }
      }
    }
  }

  return -1;
}


