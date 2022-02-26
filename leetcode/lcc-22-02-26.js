function shortestPathLength(graph) {
  let n = graph.length;
  let queue = [];
  let allVisited = (1 << n) - 1;
  let visited = new Set();
  for (let i = 0; i < n; i++) {
    let mask = 1 << i;
    visited.add(`${mask}_${i}`);
    queue.push([mask, i]);
  }
  let count = 0;
  while (queue.length) {
    let breadth = queue.length;

    for (let i = 0; i < breadth; i++) {
      let [mask, index] = queue.shift();
      if (mask === allVisited) return count;
      for (let node of graph[index]) {
        let newMask = mask | (1 << node);

        if (!visited.has(`${newMask}_${node}`)) {
          visited.add(`${newMask}_${node}`);
          queue.push([newMask, node]);
        }
      }
    }
    count++;
  }

  return count;
}
