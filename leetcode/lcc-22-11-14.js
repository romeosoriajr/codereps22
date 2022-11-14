function removeStones (stones) {
  const n = stones.length;
  const visited = new Array(n).fill(false);

  let count = 0;

  for (let i=0; i < n; i++) {
    if (visited[i]) continue;

    helper(i);
    count++;
  }

  return n - count;

  function helper(curr) {
    visited[curr] = true;

    for (let i=0; i < n; i++) {
      if (visited[i]) continue;

      if (isValid(stones[i], stones[curr])) helper(i);
    }
  }

  function isValid(a, b) {
    return (a[0] == b[0]) || (a[1] == b[1]);
  }
}
