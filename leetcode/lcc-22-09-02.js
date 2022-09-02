function averageOfLevels(root) {
  const queue = [root];

  const result = [];

  while (queue.length) {
    const breadth = queue.length;

    let sum = 0;
    for (let i = 1; i <= breadth; i++) {
      const node = queue.shift();

      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / breadth);
  }

  return result;
}
