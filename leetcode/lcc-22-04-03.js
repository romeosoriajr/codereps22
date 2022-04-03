function nextPermutation(nums) {
  if (!nums.length) return;

  let i = nums.length - 1;
  while (--i >= 0 && nums[i] >= nums[i + 1]);

  if (i >= 0) {
    let j = nums.length;

    while (nums[--j] <= nums[i]);

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  reverse(i + 1, nums.length - 1);

  function reverse(i, j) {
    while (i < j) [nums[i++], nums[j--]] = [nums[j], nums[i]];
  }
}
