function checkInclusion(s1, s2) {
  const map = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i);
    map[char] = (map[char] || 0) + 1;
  }

  let start = 0;
  let end = 0;

  while (end < s2.length) {
    const char = s2.charAt(end);

    if (map[char]) {
      map[char] = map[char] - 1;
      end++;
      if (end - start == s1.length) return true;
    } else if (start == end) {
      start++;
      end++;
    } else {
      const c = s2.charAt(start);
      map[c] = map[c] + 1;
      start++;
    }
  }

  return false;
}

//const s1 = "ab", s2 = "eidboaoo";
const s1 = "a",
  s2 = "ab";
console.log(checkInclusion(s1, s2));
