function maxArea(height) {
  let result = 0;
  let l = 0;
  let r = height.length-1;

  while (l < r) {
    const w = r-l;
    const h = Math.min(height[l], height[r]);

    result = Math.max(w*h, result);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return result;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
