function widthOfBinaryTree(root) {
  const lastPositions = [0];
  let maxWidth = 0;

  dfs(root, 0, 0);

  return maxWidth;

  function dfs(node, depth, position) {
    if (!node) return 0;
    if (depth === lastPositions.length) {
      lastPositions[depth] = position;
    }

    const width = position - lastPositions[depth];
    maxWidth = Math.max(maxWidth, width + 1);
    dfs(node.left, depth + 1, width * 2);
    dfs(node.right, depth + 1, width * 2 + 1);
  }
}
