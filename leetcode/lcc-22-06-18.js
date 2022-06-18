class WordFilter {
  constructor(words) {
    this.triePre = new TrieNode();
    this.trieSuf = new TrieNode();
    this.indices = new Map();
    for (let i = 0; i < words.length; i++) {
      this.insert(words[i]);
      this.indices.set(words[i], i);
    }
  }

  insert(word) {
    let nodePre = this.triePre;
    let nodeSuf = this.trieSuf;

    for (let i = 0; i < word.length; i++) {
      const charStart = word.charAt(i);

      if (!nodePre.children.has(charStart)) {
        nodePre.children.set(charStart, new TrieNode());
      }
      nodePre = nodePre.children.get(charStart);
      nodePre.words.add(word);

      const charEnd = word.charAt(word.length - 1 - i);
      if (!nodeSuf.children.has(charEnd)) {
        nodeSuf.children.set(charEnd, new TrieNode());
      }
      nodeSuf = nodeSuf.children.get(charEnd);
      nodeSuf.words.add(word);
    }
  }

  f(prefix, suffix) {
    let nodePre = this.triePre;
    let nodeSuf = this.trieSuf;

    for (let i = 0; i < prefix.length; i++) {
      const charStart = prefix.charAt(i);
      if (!nodePre.children.has(charStart)) return -1;
      nodePre = nodePre.children.get(charStart);
    }

    const prefixedWords = nodePre.words;

    for (let i = 0; i < suffix.length; i++) {
      const charEnd = suffix.charAt(suffix.length - 1 - i);
      if (!nodeSuf.children.has(charEnd)) return -1;
      nodeSuf = nodeSuf.children.get(charEnd);
    }

    const suffixedWords = nodeSuf.words;

    let index = -1;
    for (const p of prefixedWords) {
      if (suffixedWords.has(p)) {
        index = Math.max(index, this.indices.get(p));
      }
    }

    return index;
  }
}

class TrieNode {
  constructor() {
    this.children = new Map();
    this.words = new Set();
  }
}
