function makesquare(matchsticks) {
  const n = matchsticks.length;
  let sum = matchsticks.reduce((total, v) => total + v, 0);

  if (sum == 0 || sum % 4) return false;

  const bucketSize = sum / 4;

  matchsticks.sort((a, b) => a - b);

  const bucket = new Array(4).fill(0);

  return helper(0, sum / 4);

  function helper(startIndex) {
    if (startIndex == n) {
      return (
        bucket[0] == bucket[1] &&
        bucket[1] == bucket[2] &&
        bucket[2] == bucket[3]
      );
    }

    for (let i = 0; i < 4; i++) {
      if (bucket[i] + matchsticks[startIndex] > bucketSize) continue;

      let j = i;

      while (--j >= 0) if (bucket[i] == bucket[j]) break;

      if (j != -1) continue;

      bucket[i] += matchsticks[startIndex];
      if (helper(startIndex + 1)) return true;
      bucket[i] -= matchsticks[startIndex];
    }

    return false;
  }
}


