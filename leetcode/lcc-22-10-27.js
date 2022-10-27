function largestOverlap(a, b) {
  const rows = a.length;
  const cols = a[0].length;

  const listA = [];
  const listB = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (a[row][col]) listA.push([row,col])
      if (b[row][col]) listB.push([row,col])
    }
  }

  const map = new Map();

  for (let [aRow, aCol] of listA) {
    for (let [bRow, bCol] of listB) {
      const key = `${aRow-bRow}-${aCol-bCol}`
      map.set(key, (map.get(key) || 0) + 1)
    }
  }

  const result = Math.max(...map.values());

  return result > 0 ? result : 0;

}

