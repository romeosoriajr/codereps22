function subsets(nums) {
  const result = [[]];

  for (const num of nums) {
    const n = result.length;

    for (let i = 0; i < n; i++) {
      result.push([...result[i], num]);
    }
  }

  return result;
}

const nums = [0];

console.log(subsets(nums));
