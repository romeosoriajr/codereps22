function minimumEffortPath(heights) {
  const y = heights.length;
  const x = heights[0].length;
  const vis = new Uint8Array(x * y);
  const effort = new Uint32Array(x * y).fill(1000001);
  const pq = new MinPriorityQueue({ priority: (x) => x[1] });
  let node = 0;
  let path = 0;
  let i;
  let j;
  let cell;
  while (node !== x * y - 1) {
    (i = ~~(node / x)), (j = node % x), (cell = heights[i][j]);
    if (i > 0 && !vis[node - x]) insert(node - x, i - 1, j);
    if (i < y - 1 && !vis[node + x]) insert(node + x, i + 1, j);
    if (j > 0 && !vis[node - 1]) insert(node - 1, i, j - 1);
    if (j < x - 1 && !vis[node + 1]) insert(node + 1, i, j + 1);
    vis[node] = 1;
    while (vis[node]) [node, path] = pq.dequeue().element;
  }
  return path;

  function insert(next, k, l) {
    let newEff = Math.max(path, Math.abs(cell - heights[k][l]));
    if (effort[next] <= newEff) return;
    effort[next] = newEff;
    pq.enqueue([next, effort[next]]);
  }
}
