function largestPerimeter(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = n - 1; i > 1; i--) {
    if (nums[i] <= nums[i - 1] + nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }

  return 0;
}

