function maxProfit(prices) {
  let currProfit = 0;
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];

    currProfit = Math.max((currProfit += diff), 0);
    result = Math.max(result, currProfit);
  }

  return result;
}



