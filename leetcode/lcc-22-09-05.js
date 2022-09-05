function levelOrder(root) {
  if (!root) return [];
  const queue = [root];

  const result = [];
  while (queue.length) {
    const breadth = queue.length;

    const level = [];
    for (let i=0; i < breadth; i++) {
      const node = queue.shift();
      level.push(node.val);
      queue.push(...node.children);
    }

    result.push(level);
  }

  return result;
}

