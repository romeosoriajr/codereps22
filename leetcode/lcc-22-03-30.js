function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (!rows || !cols) return false;

  let left = 0;
  let right = rows * cols;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (mid >= rows * cols) return false;

    const row = Math.floor(mid / cols);
    const col = Math.floor(mid % cols);
    const midValue = matrix[row][col];

    if (midValue == target) {
      return true;
    }

    if (midValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}


const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
console.log(searchMatrix(matrix, target));
