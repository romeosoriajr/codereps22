function findUnsortedSubarray(nums) {
  let end = -1;
  let max = nums[0];

  for (let i=0; i < nums.length; i++) {
    if (max > nums[i]) {
      end = i;
    } else {
      max = nums[i];
    }
  }

  let start = 0;
  let min = nums[nums.length-1];

  for (let i=nums.length-2; i >= 0; i--) {
    if (min < nums[i]) {
      start = i;
    } else {
      min = nums[i];
    }
  }

  return end - start + 1;
}
