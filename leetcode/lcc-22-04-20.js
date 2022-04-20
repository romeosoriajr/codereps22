class BSTIterator {
  
  constructor(root) {
    this.stack = [];
    this.getLeftPath(root);
  }

  getLeftPath(root) {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next() {
    const node = stack.pop();
    this.getLeftPath(node.right);
    return node.val;
  }

  hasNext() {
    return !!stack.length;
  }
}



