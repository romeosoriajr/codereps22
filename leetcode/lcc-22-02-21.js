function majorityElement(nums) {
  const n = nums.length;

  let obj = {};

  for (let i = 0; i < n; i++) {
    const num = nums[i];

    obj[num] = (obj[num] || 0) + 1;

    if (obj[num] > n / 2) return num;
  }

  return null;
}
