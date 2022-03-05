function deleteAndEarn(nums) {
  if (nums.length == 1) return nums[0];
  const max = Math.max(...nums);
  const sums = new Array(max + 1).fill(0);

  for (let num of nums) sums[num] += num;

  for (let i = 2; i <= max; i++) {
    sums[i] = Math.max(sums[i - 2] + sums[i], sums[i - 1]);
  }
  return sums[max];
}

const nums = [3, 4, 2];
console.log(deleteAndEarn(nums));
