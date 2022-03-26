function search(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 12;
console.log(search(nums, target));

