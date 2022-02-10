function subarraySum(nums, k) {
  const n = nums.length;

  const pre = new Array(n).fill(null);

  pre[0] = nums[0];

  for (let i = 1; i < n; i++) {
    pre[i] = nums[i] + pre[i - 1];
  }

  const map = new Map();
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (pre[i] == k) {
      result++;
    }

    if (map.has(pre[i] - k)) {
      result += map.get(pre[i] - k);
    }

    map.set(pre[i], (map.get(pre[i]) || 0) + 1);
  }

  return result;
}
