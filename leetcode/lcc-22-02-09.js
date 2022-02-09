function findPairs (nums, k) {

  nums.sort((a,b) => a-b);

  const set = new Set();
  for (let i=0; i < nums.length-1; i++) {
    for (let j=i+1; j < nums.length; j++) {

      const val = Math.abs(nums[i]-nums[j])

      if (val == k) {
        set.add(`${nums[i]}-${nums[j]}`)
      }

    }
  }

  return set.size;
}

const nums = [3,1,4,1,5];
const k = 2;

console.log(findPairs(nums, k));
