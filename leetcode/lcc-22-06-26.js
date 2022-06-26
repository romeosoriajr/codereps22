function maxScore(cardPoints, k) {
  let n = cardPoints.length;
  let totalSum = 0;
  let minSubarray = 0;

  let i = 0;
  let currSum = 0;

  while (i < n) {
    totalSum += cardPoints[i];
    currSum += cardPoints[i];
    if (i < n - k) {
      minSubarray += cardPoints[i];
    } else {
      currSum -= cardPoints[i - (n - k)];
      minSubarray = Math.min(minSubarray, currSum);
    }
    i++;
  }

  return totalSum - minSubarray;
}

