function findAnagrams(s, p) {
  const result = [];

  const frequencies = new Array(26).fill(0);
  const slidingWindow = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    frequencies[p.charCodeAt(i) - 97]++;
    slidingWindow[s.charCodeAt(i) - 97]++;
  }

  if (isEqual()) result.push(0);

  for (let i = p.length; i < s.length; i++) {
    slidingWindow[s.charCodeAt(i - p.length) - 97]--;
    slidingWindow[s.charCodeAt(i) - 97]++;

    if (isEqual()) result.push(i - p.length + 1);
  }

  return result;

  function isEqual() {
    return frequencies.every((val, index) => slidingWindow[index] == val);
  }
}

const s = "cbaebabacd";
const p = "abc";

console.log(findAnagrams(s, p));
