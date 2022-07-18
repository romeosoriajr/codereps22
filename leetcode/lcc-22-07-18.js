function numSubmatrixSumTarget(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  const sums = new Array(m).fill(null).map(() => new Array(n).fill(null));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && !j) sums[i][j] = matrix[i][j];
      else if (!i) sums[i][j] = matrix[i][j] + sums[i][j - 1];
      else if (!j) sums[i][j] = matrix[i][j] + sums[i - 1][j];
      else {
        sums[i][j] =
          matrix[i][j] + sums[i][j - 1] + sums[i - 1][j] - sums[i - 1][j - 1];
      }
    }
  }

  let result = 0;

  for (let yA = 0; yA < m; yA++) {
    for (let yB = yA; yB < m; yB++) {
      const subSums = new Map();
      subSums.set(0, 1);

      for (let col = 0; col < n; col++) {
        let sum = sums[yB][col];

        if (yA > 0) sum -= sums[yA - 1][col];

        if (subSums.has(sum - target)) {
          result += subSums.get(sum - target);
        }

        if (!subSums.has(sum)) {
          subSums.set(sum, 1);
        } else {
          subSums.set(sum, subSums.get(sum) + 1);
        }
      }
    }
  }

  return result;
}


