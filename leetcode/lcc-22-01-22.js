function winnerSquareGame (n) {
  
  const dp = new Array(n+1).fill(false);

  for (let i=1; i <= n; i++) {

    for (let j=1; j*j <= i; j++) {
      if (!dp[i-j*j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
const n = 2;

console.log(winnerSquareGame(n));
