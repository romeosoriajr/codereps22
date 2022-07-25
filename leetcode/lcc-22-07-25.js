function searchRange(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  const result = [-1, -1];

  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) i = mid + 1;
    else j = mid;
  }

  if (nums[i] !== target) return result;
  else result[0] = i;

  j = nums.length - 1;
  while (i < j) {
    const mid = Math.floor((i + j) / 2) + 1;
    if (nums[mid] > target) j = mid - 1;
    else i = mid;
  }

  result[1] = j;
  return result;
}


