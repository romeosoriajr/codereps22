function findJudge(n, trust) {
  const candidates = new Array(n).fill(true);
  const trusted = new Array(n).fill(0);

  for (let [a, b] of trust) {
    candidates[a - 1] = false;
    trusted[b - 1] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (candidates[i]) {
      if (trusted[i] == n - 1) {
        return i + 1;
      }
    }
  }

  return -1;
}

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
