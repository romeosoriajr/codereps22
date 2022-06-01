function runningSum(nums) {
  return nums.reduce((acc, val) => {
    const prev = acc.length ? acc[acc.length - 1] : 0;

    acc.push(prev + val);
    return acc;
  }, []);
}
