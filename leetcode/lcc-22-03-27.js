function kWeakestRows(mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  const soldierCount = [];

  for (let i = 0; i < m; i++) {
    const arr = mat[i];

    let count = 0;
    for (let j = 0; j < n; j++) {
      count += arr[j];
    }
    soldierCount.push([count, i]);
  }

  soldierCount.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  const result = [];

  for (let i = 0; i < k; i++) {
    const [_, j] = soldierCount[i];
    result.push(j);
  }

  return result;
}

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

console.log(kWeakestRows(mat, k));
