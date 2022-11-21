function nearestExit(maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [[...entrance, 0]];
  maze[entrance[0]][entrance[1]] == "."

  while (queue.length) {
    const [row, col, count] = queue.shift();

    if (
      (row == 0 ||
      col == 0 ||
      row == m - 1 ||
      col == n - 1) && !(row == entrance[0] && col == entrance[1])
    ) {
      console.log(row, col, count)
      return count;
    }

    for (const [a, b] of directions) {
      const [nextRow, nextCol] = [row + a, col + b];

      if (
        nextRow >= 0 &&
        nextRow < m &&
        nextCol >= 0 &&
        nextCol < n &&
        maze[nextRow][nextCol] == "."
      ) {
        maze[nextRow][nextCol] = "+";
        queue.push([nextRow, nextCol, count + 1]);
      }
    }
  }

  return -1;
}

const maze = [["."],["."]]
const entrance = [1,0]
console.log(nearestExit(maze, entrance));
