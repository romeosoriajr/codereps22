function maxLength(nums) {
  if (!nums.length) return 0;

  const map = new Map();

  let currSum = 0;
  let result = 0;

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i] ? 1 : -1;

    if (map.has(currSum)) {
      const prevIndex = map.get(currSum);
      result = Math.max(result, i - prevIndex);
    } else {
      map.set(currSum, i);
    }
  }

  return result;
}
