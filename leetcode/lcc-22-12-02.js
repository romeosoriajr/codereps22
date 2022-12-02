function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const uniques1 = new Set(word1);
  const uniques2 = new Set(word2);

  if ([...uniques1].sort().join('') !== [...uniques2].sort().join('')) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i=0; i < word1.length; i++){
    freq1[word1.charAt(i)] = (freq1[word1.charAt(i)] || 0) + 1;
    freq2[word2.charAt(i)] = (freq2[word2.charAt(i)] || 0) + 1;
  }

  const values1 = Object.values(freq1).sort((a,b) => a-b).join('-');
  const values2 = Object.values(freq2).sort((a,b) => a-b).join('-');

  return values1 == values2;
}

