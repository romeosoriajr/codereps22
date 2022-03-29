function findDuplicate(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) return num;

    seen.add(num);
  }
}
