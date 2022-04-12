function gameOfLife(board) {
  const m = board.length;
  const n = board[0].length;
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cell = board[i][j];
      const liveNeighbors = getLiveNeighbors(i, j);

      if (cell == 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          queue.push([i, j]);
        }
      } else if (cell == 0 && liveNeighbors == 3) {
        queue.push([i, j]);
      }
    }
  }

  for (const [i, j] of queue) {
    board[i][j] = board[i][j] ? 0 : 1;
  }

  return board;

  function getLiveNeighbors(i, j) {
    let liveNeighbors = 0;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1,1],
      [-1,-1],
      [1,-1],
      [-1,1]
    ];

    for (let [a, b] of directions) {
      const neighborRow = i - a;
      const neighborCol = j - b;

      if (
        neighborRow >= 0 &&
        neighborRow < m &&
        neighborCol >= 0 &&
        neighborCol < n
      ) {
        if (board[neighborRow][neighborCol] == 1) {
          liveNeighbors++;
        }
      }
    }

    return liveNeighbors;
  }
}
