function levelOrder (root) {

  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {

    const breadth = queue.length;

    const level = [];

    for (let i=0; i < breadth; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);

  }

  return result;

}

