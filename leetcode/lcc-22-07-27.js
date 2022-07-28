function flatten(root) {
  if (!root) return;
  while (root) {
    if (root.left) {
      const left = root.left;
      let curr = left;
      while (curr.right) curr = curr.right;
      curr.right = root.right;
      root.left = null;
      root.right = left;
    }

    root = root.right;
  }
}

