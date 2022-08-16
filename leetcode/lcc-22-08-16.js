function firstUniqChar (s) {

  const map = {}

  for (let char of s) {
    map[char] = (map[char] ? map[char] : 0) + 1
  }

  for (let i=0; i < s.length; i++) {
    const char = s.charAt(i);

    if (map[char] == 1) return i;
  }

  return -1;

}

