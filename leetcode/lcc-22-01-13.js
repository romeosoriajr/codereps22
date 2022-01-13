function findMinArrowShots(points) {
  points.sort((a, b) => (a[1] < b[1] ? -1 : 1));

  let result = 1;
  let arrow = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > arrow) {
      result++;
      arrow = points[i][1];
    }
  }

  return result;
}

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

console.log(findMinArrowShots(points));
