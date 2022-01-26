function getAllElements(root1, root2) {
  const stack1 = [];
  const stack2 = [];
  const result = [];

  let curr1 = root1;
  let curr2 = root2;

  while (curr1 || curr2 || stack1.length || stack2.length) {
    while (curr1) {
      stack1.push(curr1);
      curr1 = curr1.left;
    }

    while (curr2) {
      stack2.push(curr2);
      curr2 = curr2.left;
    }

    if (
      !stack2.length ||
      (stack1.length &&
        stack1[stack1.length - 1].val <= stack2[stack2.length - 1].val)
    ) {
      curr1 = stack1.pop();
      result.push(curr1.val);
      curr1 = curr1.right;
    } else {
      curr2 = stack2.pop();
      result.push(curr2.val);
      curr2 = curr2.right;
    }
  }

  return result;
}


