function convertBST(root) {

  let total = 0;
  dfs(root);

  return root;

  function dfs(root) {
    if (!root) return;

    dfs(root.right);
    total += root.val;
    root.val = total;
    dfs(root.left);
  }
}
