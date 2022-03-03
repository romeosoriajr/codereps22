function numberOfArithmeticSlices(nums) {
  let result = 0;
  let count = 0;
  let prevDiff = nums[1] - nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    const currDiff = nums[i + 1] - nums[i];

    if (prevDiff == currDiff) {
      count++;
    } else {
      prevDiff = currDiff;
      count = 0;
    }

    result += count;
  }

  return result;
}
