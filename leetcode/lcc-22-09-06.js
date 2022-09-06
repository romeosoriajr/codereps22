function pruneTree(node) {

  if (node) {
    node.left = pruneTree(node.left);
    node.right = pruneTree(node.right);

    if (!node.left && !node.right && node.val == 0) return null;
  }

  return node;

}

