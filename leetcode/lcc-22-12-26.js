function canJump(nums) {
  const n = nums.length;

  const visited = new Array(n).fill(false);

  visited[n - 1] = true;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= nums[i] && i + j < n; j++) {
      if (visited[i + j]) {
        visited[i] = true;
        break;
      }
    }
  }

  return visited[0];
}
