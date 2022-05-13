function connect(root) {
  if (!root) return root;
  const queue = [root];
  const dummy = new Node(null);
  while (queue.length) {
    const breadth = queue.length;

    let prev = dummy;

    for (let i = 0; i < breadth; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        prev.next = node.left;
        prev = prev.next;
      }

      if (node.right) {
        queue.push(node.right);
        prev.next = node.right;
        prev = prev.next;
      }
    }
  }

  return root;
}


