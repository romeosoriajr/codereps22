function findAndReplacePattern(words, pattern) {
  const result = [];

  for (let word of words) {
    if (helper(word)) result.push(word);
  }

  return result;

  function helper(word) {
    for (let i=0; i < word.length; i++) {
      if (word.indexOf(word.charAt(i)) !== pattern.indexOf(pattern.charAt(i))) return false;
    }

    return true;
  }
}
