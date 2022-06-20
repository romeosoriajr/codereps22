class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.height = 0;
  }
}

function minimumLengthEncoding(words) {
  const root = new TrieNode();

  for (const word of words) {
    insert(root, word);
  }

  const stack = [];
  stack.push(root);

  let size = 0;
  while (stack.length) {
    const node = stack.pop();
    let num = 0;
    for (const child of node.children) {
      if (!child) continue;
      num++;
      stack.push(child);
    }

    if (num == 0) size += node.height + 1;
  }

  return size;

  function insert(root, word) {
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word.charCodeAt(i);
      if (root.children[char - 97] == null) {
        root.children[char - 97] = new TrieNode();
      }
      const prevHeight = root.height;
      root = root.children[char - 97];
      root.height = prevHeight + 1;
    }
  }
}
