function isPossible(nums) {
  const freqs = {};

  for (let i = 0; i < nums.length; i++) {
    freqs[nums[i]] = (freqs[nums[i]] || 0) + 1;
  }

  const remaining = {};

  for (let num of nums) {
    if (!freqs[num]) continue;

    if (remaining[num] > 0) {
      remaining[num] -= 1;
      remaining[num+1] = (remaining[num+1] || 0) + 1;
    } else if (freqs[num+1] > 0 && freqs[num+2] > 0) {
      freqs[num+1] -= 1;
      freqs[num+2] -= 1;
      remaining[num+3] = (remaining[num+3] || 0) + 1;
    } else {
      return false;
    }
    freqs[num] -= 1;
  }

  return true;
}


