function isValidBST(root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function helper(root, low, high) {
    if (!root) return true;

    if (!(low < root.val && root.val < high)) return false;

    return (
      helper(root.left, low, root.val) && helper(root.right, root.val, high)
    );
  }
}


