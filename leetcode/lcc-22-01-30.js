function rotate(nums, k) {
  const n = nums.length;
  const mod = k % n;

  flip(0, n - 1);
  flip(0, mod - 1);
  flip(mod, n - 1);

  return nums;

  function flip(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];

      start++;
      end--;
    }
  }
}




