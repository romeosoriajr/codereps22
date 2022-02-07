function findTheDifference(s, t) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);

    if (!map[char]) return char;
    map[char] = map[char] - 1;
  }

  return null;
}

const s = "",
  t = "y";
console.log(findtheDifference(s, t));
