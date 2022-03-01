function countBits(n) {
  const result = Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    result[i] = helper(i);
  }

  return result;

  function helper(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    if (result[n] != 0) return result[n];

    if (n % 2) {
      result[n] = 1 + helper(Math.floor(n / 2));
    } else {
      result[n] = helper(Math.floor(n / 2));
    }

    return result[n];
  }
}

console.log(countBits(5));
