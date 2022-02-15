function singleNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set.values()].pop();
}

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
