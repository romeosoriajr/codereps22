function maxOperations(nums, k) {

  const map = new Map();

  let opsCount = 0;

  for (let num of nums) {
    const pair = k - num;
    if (map.has(pair)) {
      opsCount++;
      if (map.get(pair) == 1){
        map.delete(pair);
      } else {
        map.set(pair, map.get(pair) - 1)
      }
    } else {
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  return opsCount;

}

const nums = [3,1,3,4,3], k = 6
console.log(maxOperations(nums, k));
