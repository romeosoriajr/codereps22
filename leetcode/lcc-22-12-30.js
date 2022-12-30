function allPathsSourceTarget(graph) {
  const n = graph.length;
  const paths = [];

  helper([0], 0);
  return paths;

  function helper(currPath, target) {
    if (target == n-1) {
      paths.push([...currPath]);
      return;
    }

    const neighbors = graph[target];
    for (let i = 0; i < neighbors.length; i++) {
      const nextTarget = neighbors[i];

      currPath.push(nextTarget);
      helper(currPath, nextTarget);
      currPath.pop();
    }
  }
}

