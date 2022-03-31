function splitArray(nums, m) {
  let start = Number.MIN_SAFE_INTEGER;
  let end = 0;
  for (let num of nums) {
    start = Math.max(start, num);
    end += num;
  }

  let result;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (helper(mid)) {
      end = mid - 1;
      result = mid;
    } else {
      start = mid + 1;
    }
  }

  return result;

  function helper(curr) {
    let sum = 0;
    let count = 1;

    for (let num of nums) {
      sum += num;

      if (sum > curr) {
        sum = num;
        count++;
      }

      if (count > m) return false;
    }

    return true;
  }
}
