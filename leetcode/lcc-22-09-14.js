function pseudoPalindromicPaths(root) {
  const dict = new Map();
  let result = 0;

  helper(root);

  return result;

  function helper(node) {
    if (!node) return;

    dict.set(node.val, (dict.get(node.val) || 0) + 1);

    if (!node.left && !node.right) {
      if (isPseudoPalindromic(dict)) {
        result += 1;
      }
    }

    helper(node.left);
    helper(node.right);
    dict.set(node.val, dict.get(node.val) - 1);
  }

  function isPseudoPalindromic(dict) {
    let odd = 0;

    for (let val of dict.values()) {
      if (val % 2) odd++;

      if (odd > 1) return false;
    }

    return true;
  }
}

//better way is to just maintain set by deleting if it exists, or adding to it if it doesnt.
//if set has less than 1 item in it, it is pseudopalindromic.

