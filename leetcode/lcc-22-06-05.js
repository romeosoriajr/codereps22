function solveNQueens(n) {
  return helper(n, 0, [], 0);

  function helper(n, row, choices, solutions) {
    if (row === n) {
      solutions++;
    } else {
      for (let i = 0; i < n; i++) {
        choices.push(i);
        if (isValid(choices)) {
          solutions = helper(n, row + 1, choices, solutions);
        }
        choices.pop();
      }
    }

    return solutions;
  }

  function isValid(choices) {
    const row = choices.length - 1;
    const column = choices[choices.length - 1];

    for (let i = 0; i < choices.length - 1; i++) {
      const currentRow = i;
      const currentCol = choices[i];
      const leftCollisionIndex = currentCol - (row - currentRow);
      const rightCollisionIndex = currentCol + (row - currentRow);

      if (column === currentCol) return false;
      if (column === leftCollisionIndex || column === rightCollisionIndex)
        return false;
    }
    return true;
  }
}

