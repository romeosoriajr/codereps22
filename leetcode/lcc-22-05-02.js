function sortArrayByParity(nums) {
  let pointerA = 0;
  let pointerB = 0;

  while (pointerB < nums.length) {
    if (nums[pointerB] % 2 == 0) {
      [nums[pointerA], nums[pointerB]] = [nums[pointerB], nums[pointerA]];
      pointerA++;
    }

    pointerB++;
  }

  return nums;
}
