function recoverTree(root) {
  let prev = new TreeNode(Number.MIN_SAFE_INTEGER);
  let badA = null;
  let badB = null;
  dfs(root);

  [badA.val, badB.val] = [badB.val, badA.val]

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    if (!badA && root.val < prev.val) {
      badA = prev;
    }

    if (badA && root.val < prev.val) {
      badB = root;
    }
    prev = root;
    dfs(root.right);
  }

}
