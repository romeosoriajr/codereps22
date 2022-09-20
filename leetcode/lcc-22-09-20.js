function findLength(nums1, nums2) {
  const [a, b] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  const m = a.length;
  const n = b.length;

  const dp = new Array(n + 1).fill(0);

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (a[i] == b[j]) {
        dp[j + 1] = dp[j] + 1;
      } else {
        dp[j + 1] = 0;
      }

      result = Math.max(result, dp[j + 1]);
    }
  }

  return result;
}

