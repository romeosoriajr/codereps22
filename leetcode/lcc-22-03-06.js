function countOrders(n) {
  let result = 1;
  const mod = 1000000007;

  for (let i = 1; i <= n; ++i) {
    result *= i;

    result %= mod;

    result *= 2 * i - 1;

    result %= mod;
  }

  return result % mod;
}

console.log(countOrders(3))
