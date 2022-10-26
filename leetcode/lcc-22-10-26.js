function checkSubarraySum(nums, k) {
  const map = new Map();

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sum %= k;

    if (sum == 0 && i > 0) return true;

    if (map.has(sum)) {
      if (i - map.get(sum) > 1) return true;
    } else {
      map.set(sum, i);
    }
  }

  return false;
}
