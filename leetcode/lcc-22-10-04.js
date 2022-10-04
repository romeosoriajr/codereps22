function hasPathSum(root, targetSum) {
  if (!root) return false;

  const newTarget = targetSum - root.val;

  if (!root.left && !root.right) {
    return newTarget == 0;
  }

  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}
