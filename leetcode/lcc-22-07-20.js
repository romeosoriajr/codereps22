function numMatchingSubseq(s, words) {
  const map = new Map();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s.charAt(i))) {
      map.set(s.charAt(i), []);
    }
  }

  for (let word of words) {
    const char = word.charAt(0);
    if (map.has(char)) {
      map.get(char).push(word);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    const queue = map.get(char);
    const size = queue.length;

    for (let k = 0; k < size; k++) {
      const str = queue.shift();
      if (str.substr(1).length == 0) {
        result++;
      } else {
        if (map.has(str.charAt(1))) {
          map.get(str.charAt(1)).push(str.substr(1));
        }
      }
    }
  }

  return result;
}

