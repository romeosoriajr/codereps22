function rightSideView(root) {
  const result = [];
  if (!root) return result;
  const queue = [root];

  while (queue.length) {
    const b = queue.length;

    for (let i = 0; i < b; i++) {
      const node = queue.shift();

      if (b - 1 == i) result.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

