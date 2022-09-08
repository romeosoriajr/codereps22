function inorderTraversal(root) {
  const result = [];
  dfs(root);

  return result;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
}

