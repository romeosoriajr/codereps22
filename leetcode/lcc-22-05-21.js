function coinChange(coins, amount) {
  const memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        memo[i] = Math.min(memo[i - coin] + 1, memo[i]);
      }
    }
  }

  return memo[amount] > amount ? -1 : memo[amount];
}

console.log(coinChange([1], 0));
