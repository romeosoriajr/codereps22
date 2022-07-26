function lowestCommonAncestor(root, p, q) {
  if (!root) return root;

  if (p == root || q == root) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ? left : right;
}
