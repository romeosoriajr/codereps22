function tree2str(root) {
  if (!root) return `()`;

  let result = "";

  result += `${root.val}`;

  if (root.left) {
    result += `(${tree2str(root.left)})`;
  }

  if (root.right) {
    if (!root.left) result += "()";
    result += `(${tree2str(root.right)})`;
  }
  return result;
}

