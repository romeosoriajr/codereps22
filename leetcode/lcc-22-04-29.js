function isBipartite(graph) {
  const m = graph.length;
  if (m <= 1) return true;

  const colors = new Array(n).fill(null);

  for (let i = 0; i < m; i++) {
    if (colors[i] == null && !helper(true, i)) return false;
  }

  return true;

  function helper(color, node) {
    if (colors[node] != null) return colors[node] == color;

    colors[node] = color;
    color = !color;

    const neighbors = graph[node];

    for (const neighbor of neighbors) {
      if (!helper(color, neighbor)) return false;
    }

    return true;
  }
}


