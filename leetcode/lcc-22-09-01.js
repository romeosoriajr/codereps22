function goodNodes(root) {

  return helper(root, 0, root.val);

  function helper(node, count, maxVal) {
    if (!node) return count;

    if (node.val >= maxVal) count++;

    count = helper(node.left, count, Math.max(node.val, maxVal));
    count = helper(node.right, count, Math.max(node.val, maxVal));

    return count;
  }
}
