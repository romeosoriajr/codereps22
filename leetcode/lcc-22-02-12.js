function ladderLength(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;

  const queue = [beginWord];
  const visited = new Set();
  visited.add(beginWord);

  let steps = 1;

  while (queue.length) {
    const breadth = queue.length;

    for (let i = 0; i < breadth; i++) {
      const word = queue.shift();

      if (word == endWord) return steps;

      for (let j = 0; j < word.length; j++) {
        const chars = word.split("");

        //might be better to change this block to adjacency list
        for (let k = 97; k <= 97 + 25; k++) {
          const char = String.fromCharCode(k);
          chars[j] = char;

          const newWord = chars.join("");

          if (set.has(newWord) && !visited.has(newWord)) {
            queue.push(newWord);
            visited.add(newWord);
          }
        }
      }
    }

    steps++;
  }

  return 0;
}

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
