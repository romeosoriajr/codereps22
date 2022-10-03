function minCost(colors, neededTime) {
  let result = 0;
  let maxTime = 0;
  let totalTime = 0;
  const n = colors.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && colors.charAt(i) != colors.charAt(i - 1)) {
      result += totalTime - maxTime;
      totalTime = 0;
      maxTime = 0;
    }

    totalTime += neededTime[i];
    maxTime = Math.max(maxTime, neededTime[i]);
  }

  result += totalTime - maxTime;
  return result;
}

