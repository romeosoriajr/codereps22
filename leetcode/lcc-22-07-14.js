function buildTree(preorder, inorder) {
  return helper(0, preorder.length - 1, 0, inorder.length - 1);

  function helper(preA, preB, inA, inB) {
    if (preA > preB || inA > inB) return null;

    const value = preorder[preA];
    const root = new TreeNode(value);
    const index = inorder.indexOf(value);
    const nLeft = index - inA;

    root.left = helper(preA + 1, preA + nLeft, inA, index - 1);
    root.right = helper(preA + nLeft + 1, preB, index + 1, inB);

    return root;
  }
}

