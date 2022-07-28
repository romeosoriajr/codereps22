function isAnagram(s, t) {
  const map = new Map();

  for(const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for(const char of t) {
    if (!map.has(char)) return false;

    if (map.get(char) == 1) {
      map.delete(char);
    } else {
      map.set(char, map.get(char) - 1);
    }
  }

  return !map.size;
}
