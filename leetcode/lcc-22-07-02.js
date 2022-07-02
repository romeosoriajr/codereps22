function maxArea (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(h);
  horizontalCuts.sort((a,b) => a-b);

  verticalCuts.push(w);
  verticalCuts.sort((a,b) => a-b);

  let horizontalMax = horizontalCuts[0];
  let verticalMax = verticalCuts[0];

  for (let i=1; i < horizontalCuts.length; i++) {
    horizontalMax = Math.max (horizontalMax, horizontalCuts[i] - horizontalCuts[i-1]);
  }

  for (let i=1; i < verticalCuts.length; i++) {
    verticalMax = Math.max (verticalMax, verticalCuts[i] - verticalCuts[i-1]);
  }

  return (BigInt(horizontalMax) * BigInt(verticalMax)) % BigInt(10**9+7)
}


