function removeDuplicates(nums) {
  if (nums.length < 2) return nums.length;

  let slow = 2;
  let fast = 2;

  while (fast < nums.length) {
    if (nums[slow-2] !== nums[fast]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
}

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
