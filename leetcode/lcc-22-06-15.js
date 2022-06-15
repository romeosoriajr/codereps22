function longestStrChain(words) {
  words.sort((a, b) => a.length - b.length);

  const dp = new Map();

  let result = 1;

  for (const word of words) {
    let curr = 1;

    const letters = word.split("");
    for (let i = 0; i < word.length; i++) {
      letters.splice(i, 1);
      curr = Math.max(curr, (dp.get(letters.join("")) || 0) + 1);
      letters.splice(i, 0, word.charAt(i));
    }
    dp.set(word, curr);
    result = Math.max(result, curr);
  }

  return result;
}

