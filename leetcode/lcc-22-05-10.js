function combinationSum3(k, n) {
  const result = [];

  helper(k, n, 1, []);
  return result;

  function helper(k, n, startIndex, currComb) {
    if (k == 0) {
      if (n == 0) {
        result.push([...currComb]);
      }
      return;
    }

    for (let i = startIndex; i <= 9; i++) {
      currComb.push(i);
      helper(k - 1, n - i, i + 1, currComb);
      currComb.pop();
    }
  }
}


