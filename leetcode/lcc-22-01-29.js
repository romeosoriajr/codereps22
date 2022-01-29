function largestRectangleArea(heights) {
  const n = heights.length;
  let result = 0;
  const stack = [];

  for (let i = 0; i <= n; i++) {
    let h = i == n ? 0 : heights[i];

    while (stack.length && h < heights[stack[stack.length - 1]]) {
      const top = stack.pop();

      const w = !stack.length ? i : i - stack[stack.length - 1] - 1;
      const area = heights[top] * w;
      result = Math.max(result, area);
    }

    stack.push(i);
  }

  return result;
}
