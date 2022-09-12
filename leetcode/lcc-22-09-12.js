function bagOfTokensScore(tokens, power) {
  tokens.sort((a, b) => a - b);
  let currScore = 0;
  let maxScore = 0;

  let start = 0;
  let end = tokens.length - 1;

  while (start <= end) {
    if (power >= tokens[start]) {
      power -= tokens[start];
      currScore += 1;
      maxScore = Math.max(maxScore, currScore);
      start++;
    } else if (currScore >= 1) {
      power += tokens[end];
      currScore -= 1;
      end--;
    } else {
      break;
    }
  }

  return maxScore;
}
