function search(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num == target) return true;

    if (nums[left] == num && nums[right] == num) {
      left++;
      right--;
    } else if (nums[left] <= num) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

const nums = [2, 5, 6, 0, 0, 1, 2];
const target = 0;

console.log(search(nums, target));
