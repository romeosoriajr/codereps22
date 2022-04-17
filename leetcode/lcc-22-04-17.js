function increasingBST(root) {

  const dummy = new TreeNode(0);
  let temp = dummy;
  dfs(root, temp);
  return dummy.right;

  function dfs(root, temp) {
    if (!root) return temp;

    temp = dfs(root.left, temp);
    temp.right = root;
    root.left = null;
    temp = root;
    return dfs(root.right, temp);
  }
}

