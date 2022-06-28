function minDeletions(s) {
  const freq = new Array(26).fill(0);

  for (let char of s) {
    const pos = char.charCodeAt(0) - 97;
    freq[pos]++;
  }

  freq.sort((a, b) => a - b);

  let result = 0;

  for (let i = 24; i >= 0; i--) {
    if (freq[i] == 0) break;
    if (freq[i] >= freq[i + 1]) {
      let prev = freq[i];
      freq[i] = Math.max(freq[i + 1] - 1, 0);
      result += prev - freq[i];
    }
  }

  return result;
}

console.log(minDeletions("hello"));
