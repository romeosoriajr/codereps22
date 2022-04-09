function topKFrequent (nums, k) {

  var count = {};

  for (let i=0; i < nums.length; ++i) {

    if (!count[nums[i]]) {
      count[nums[i]] = 0;
    }
    count[nums[i]]++;
  }

  return Object.keys(count)
    .sort((a,b) => count[b] - count[a])
    .slice(0, k)

}
const nums = [1,2];
const k = 2;

console.log(topKFrequent(nums, k))
