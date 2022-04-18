function kthSmallest(root, k) {
  let count = k;
  let result = null;

  traverse(root);
  return result;

  function traverse(root) {
    if (!root) return;

    if (root.left) traverse(root.left);

    if (--count == 0) {
      result = root.val;
      return;
    }

    if (root.right) traverse(root.right);
  }
}
