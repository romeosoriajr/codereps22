function topKFrequent(words, k) {
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  const entries = [...map.entries()];

  entries.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }

    return b[1] - a[1];
  });

  const result = [];

  for (let i=0; i < k; i++) {
    result.push(entries[i][0]);
  }

  return result;
}

