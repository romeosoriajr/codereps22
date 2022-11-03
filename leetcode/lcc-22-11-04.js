function longestPalindrome(words) {
  const map = new Map();

  let single = 0;
  let result = 0;

  for (const word of words) {
    if (!map.has(word)) map.set(word, 0);

    if (word.charAt(0) == word.charAt(1)) {
      if (map.get(word) > 0) {
        single--;
        map.set(word, map.get(word) - 1);
        result += 4;
      } else {
        map.set(word, map.get(word) + 1);
        single++;
      }
    } else {
      const reverse = word.split("").reverse().join("");
      if (map.has(reverse) && map.get(reverse) > 0) {
        result += 4;
        map.set(reverse, map.get(reverse) - 1);
      } else {
        map.set(word, map.get(word) + 1);
      }
    }
  }

  if (single > 0) result += 2;
  return result;
}

