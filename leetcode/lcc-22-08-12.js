function lowestCommonAncestor(root, p, q){

  if (root == p || root == q || !root) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root;
  if (left) return left;
  if (right) return right;
}
