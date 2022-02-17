function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  helper(0, [], target);

  function helper(currIndex, path, target) {
    if (target == 0) {
      result.push([...path]);
      return;
    }

    while (
      currIndex < candidates.length &&
      target - candidates[currIndex] >= 0
    ) {
      path.push(candidates[currIndex]);
      helper(currIndex, path, target - candidates[currIndex]);
      currIndex++;
      path.pop();
    }
  }

  return result;
}

const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates, target));
