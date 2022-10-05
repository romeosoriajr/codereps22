function addOneRow(root, v, d) {
    if (d == 0 || d == 1) {
        const newNode = new TreeNode(v);
        newNode.left = d == 1 ? root : null;
        newNode.right = d == 0 ? root : null;
        return newNode;
    }
    if (root && d >= 2) {
        root.left  = addOneRow(root.left,  v, d > 2 ? d - 1 : 1);
        root.right = addOneRow(root.right, v, d > 2 ? d - 1 : 0);
    }
    return root;
}

