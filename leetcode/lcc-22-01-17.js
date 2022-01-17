function wordPattern(pattern, s) {
  const seen = new Set();
  const map = new Map();

  const letters = pattern.split("");
  const words = s.split(" ");

  const m = letters.length;

  if (m !== words.length) return false;

  for (let i = 0; i < m; i++) {
    const key = letters[i];
    const word = words[i];

    if (!map.has(key) && !seen.has(word)) {
      map.set(key, word);
      seen.add(word);
    }

    if (map.get(key) !== word) return false;
  }

  return true;
}

const pattern = "aaaa";
const s = "dog cat cat dog";

console.log(wordPattern(pattern, s));
