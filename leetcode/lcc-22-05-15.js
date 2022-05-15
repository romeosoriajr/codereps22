function deepestLeavesSum (root) {

  const queue = [root];

  let sum = 0;

  while (queue.length) {
    const breadth = queue.length;
    sum = 0;

    for (let i=0; i < breadth; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return sum;

};
