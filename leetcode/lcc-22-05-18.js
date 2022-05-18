function criticalConnections(n, connections) {
  const adj = [...Array(n)].map((_) => []);
  for (const [a, b] of connections) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const result = [];
  helper(0);
  return result;

  function helper(node, parent = -1, rank = 0, ranks = Array(n).fill(-1)) {
    ranks[node] = rank;

    for (const neighbour of adj[node]) {
      if (neighbour === parent) continue;
      if (ranks[neighbour] === -1) {
        ranks[neighbour] = helper(neighbour, node, rank + 1, ranks);
      }
      ranks[node] = Math.min(ranks[node], ranks[neighbour]);
    }

    if (node && ranks[node] === rank) {
      result.push([node, parent]);
    }

    return ranks[node];
  }
}
