function cloneGraph(node) {
  const map = new Map();

  return helper(node);

  function helper(node) {
    if (!node) return null;
    if (!map.has(node)) {
      map.set(node, new Node(node.val));
      map.get(node).neighbors = node.neighbors.map(helper);
    }

    return map.get(node);
  }
}
