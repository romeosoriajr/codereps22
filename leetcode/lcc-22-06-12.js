function maximumUniqueSubarray(nums) {
  const n = nums.length;
  const map = new Map();
  const prefixSum = new Array(n + 1).fill(null);

  let result = 0;


  let left = 0;
  let right = 0;

  while (right < n) {
    const num = nums[right];
    prefixSum[right + 1] = prefixSum[right] + num;
    if (map.has(num)) {
      left = Math.max(left, map.get(num) + 1);
    }

    result = Math.max(result, prefixSum[right+1] - prefixSum[left]);
    map.set(num, right);
    right++;
  }

  return result;
}

console.log(maximumUniqueSubarray([2, 4, 5, 6]));
