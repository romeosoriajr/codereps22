function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const m = queries.length;
  const result = new Array(m).fill(null);
  const prefix = [];

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    prefix.push(sum);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (prefix[j] <= queries[i]) result[i] = j + 1;
      else break;
    }
  }

  return result;
}

