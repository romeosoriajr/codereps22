function sortedArrayToBST(num) {
  if (num.length === 0) return null;

  return helper(num, 0, num.length-1);

  function helper(num, low, high) {
    if (low > high) return null;

    const mid = Math.floor((low+high) /2);

    const node = new TreeNode(num[mid]);
    node.left = helper(num, low, mid-1);
    node.right = helper(num, mid+1, high);

    return node;

  }
}
