function permuteUnique(nums) {
  const result = [];
  const visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  helper([]);
  return result;

  function helper(currPerm) {
    if (currPerm.length == nums.length) {
      result.push([...currPerm]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i && nums[i - 1] == nums[i] && !visited[i - 1]) continue;

      visited[i] = true;

      currPerm.push(nums[i]);
      helper(currPerm);
      currPerm.pop();
      visited[i] = false;
    }
  }
}

const nums = [1, 1, 2];
console.log(permuteUnique(nums));
