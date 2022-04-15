function trimBST(root, low, high) {
  if (!root) return null;

  if (low <= root.val && root.val <= high) {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  } else if (low > root.val) {
    root = trimBST(root.right, low, high);
  } else if (root.val > high) {
    root = trimBST(root.left, low, high);
  }

  return root;
}
