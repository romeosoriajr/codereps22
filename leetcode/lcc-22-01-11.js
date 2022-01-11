function sumRootToLeaf (root) {

  let result = 0;

  helper(root, 0);

  return result;
  function helper(root, bits) {
    if (!root) return;

    let appended = bits << 1 | root.val
    if (!root.left && !root.right) {
      result += appended;
    }

    helper(root.left, appended)
    helper(root.right, appended)
  }
}

