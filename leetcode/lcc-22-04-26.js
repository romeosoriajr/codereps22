class UnionFind {
  constructor(n) {
    this.root = new Array(n).fill().map((_, index) => index);
  }
  find(x) {
    if (x == this.root[x]) {
      return x;
    }
    // path compression
    return (this.root[x] = this.find(this.root[x]));
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootY != rootX) {
      this.root[rootY] = rootX;
      return true;
    }
    return false;
  }
}

function minCostConnectPoints(points) {
  let n = points.length;
  if (n < 2) return 0;
  let edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      edges.push([dist, i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]);

  let uf = new UnionFind(n);
  let cost = 0;
  for (const [dist, i, j] of edges) {
    if (uf.union(i, j)) {
      cost += dist;
    }
  }
  return cost;
}
