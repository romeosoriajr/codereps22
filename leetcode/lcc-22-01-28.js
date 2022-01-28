class WordDictionary {
  constructor() {
    this.children = {};
    this.terminus = false;
  }

  addWord(word) {
    let dict = this;

    for (let char of word) {
      if (!dict.children[char]) dict.children[char] = new WordDictionary();
      dict = dict.children[char];
    }

    dict.terminus = true;
  }

  search(word) {
    let dict = this;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);

      if (char == ".") {
        const letters = Object.keys(dict.children);
        const subWord = word.substr(i + 1);
        for (let key of letters) {
          if (dict.children[key].search(subWord)) return true;
        }
        return false;
      }

      if (!dict.children[char]) return false;
      dict = dict.children[char];
    }

    return dict && dict.terminus;
  }
}
const dict = new WordDictionary();
dict.addWord("cow");
dict.addWord("w");
console.log(dict.search("w"));
console.log(dict.search("..w"));
console.log(dict.search("cow"));
console.log(dict.search("ciw"));
