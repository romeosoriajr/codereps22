function sumEvenAfterQueries(nums, queries) {
  const result = [];

  let currSum = nums.reduce((acc, num) => {
    if (num % 2 == 0) acc += num;
    return acc;
  }, 0);

  for (const query of queries) {
    const [offset, i] = query;
    const newNum = nums[i] + offset;

    if (nums[i] % 2 == 0) {
      currSum -= nums[i];
    }

    if (newNum % 2 == 0) {
      currSum += newNum;
    }

    nums[i] = newNum;
    result.push(currSum);
  }

  return result;
}

