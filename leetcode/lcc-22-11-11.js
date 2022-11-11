function removeDuplicates(nums) {

  let n = nums.length;

  let first = 0;
  let second = 1;

  while (second < n) {

    if (nums[first] != nums[second]) {
      nums[++first] = nums[second];
    }

    second++;
  }

  return first + 1;

}

