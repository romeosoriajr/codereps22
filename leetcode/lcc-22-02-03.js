function fourSumCount(nums1, nums2, nums3, nums4) {
  const map = {};

  let result = 0;

  for (let i of nums1) {
    for (let j of nums2) {
      map[i + j] = (map[i + j] || 0) + 1;
    }
  }

  for (let k of nums3) {
    for (let l of nums4) {
      result += map[-(k + l)] || 0;
    }
  }

  return result;
}
const nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];

console.log(fourSumCount(nums1, nums2, nums3, nums4));
