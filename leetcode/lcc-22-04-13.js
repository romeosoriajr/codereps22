function generateMatrix (n) {

  const directions = [
    [0,1], // move right
    [1,0], // move down
    [0,-1],// move left
    [-1,0] // move up
  ];

  const matrix = new Array(n).fill(null).map(() => new Array(n).fill(null))


  let num = 1;
  let directionIndex = 0;
  let directionShift = directions[directionIndex];
  let [vShift, hShift] = directionShift;

  let row=0;
  let col=0;

  while (num <= (n**2)) {

    //if pos is taken, should step back and change direction
    if (row < 0 || row >= n || col < 0 || col >= n || matrix[row][col] !== null) {
      // revert position
      row -= vShift;
      col -= hShift;

      //change direction;
      //continue;
      directionIndex = directionIndex == 3 ? 0 : directionIndex+1;
      directionShift = directions[directionIndex];
      [vShift, hShift] = directionShift;
    } else {
      matrix[row][col] = num;
      num++;
    }
    row += vShift;
    col += hShift;
  }

  return matrix;
}
