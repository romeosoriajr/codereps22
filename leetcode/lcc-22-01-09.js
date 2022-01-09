function isRobotBounded(instructions) {

  let dir = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  let i = 0;
  let x = 0;
  let y = 0;

  for (let k = 0; k < instructions.length; k++) {
    const char = instructions.charAt(k);

    if (char == "G") {
      x = x + dir[i][0];
      y = y + dir[i][1];
    } else {
      i = (i + (char == "L" ? 1 : 3)) % 4;
    }
  }

  return (x == 0 && y == 0) || i != 0;
}



