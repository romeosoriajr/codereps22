function exist(board, word) {

  const m = board.length;
  const n = board[0].length;

  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const seen = new Array(m).fill(null).map(() => new Array(n).fill(false))

  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      const boardChar = board[i][j];
      const firstChar = word.charAt(0);

      seen[i][j] = true;
      if (boardChar == firstChar && helper(boardChar, 1, i, j)) {
        return true;
      }
      seen[i][j] = false;
    }
  }

  return false;
  

  function helper(str, next, i, j) {
    if (str == word) return true;

    const wordChar = word.charAt(next);
    for (const [a,b] of directions) {
      const nextRow = i+a;
      const nextCol = j+b;
      if (nextRow >= m || nextRow < 0 || nextCol >= n || nextCol < 0 || seen[nextRow][nextCol]) continue;
      seen[nextRow][nextCol] = true;
      const neighborChar = board[nextRow][nextCol];
      if (wordChar == neighborChar && helper(str+wordChar, next+1, nextRow, nextCol)) {
        return true;
      }
      seen[nextRow][nextCol] = false;

    }
    return false;

  }
}

