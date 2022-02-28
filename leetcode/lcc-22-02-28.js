function summaryRanges(nums) {
  const result = [];
  const n = nums.length;
  if (n == 0) return result;

  let a = nums[0];

  for (let i = 0; i < n; i++) {
    if (i == n - 1 || nums[i] + 1 != nums[i + 1]) {
      if (nums[i] != a) {
        result.push(`${a}->${nums[i]}`);
      } else {
        result.push(`${a}`);
      }

      if (i != n - 1) a = nums[i + 1];
    }
  }

  return result;
}

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
