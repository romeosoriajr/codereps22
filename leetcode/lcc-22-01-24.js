function detectCapitalUse(word) {
  return (
    word.toUpperCase() == word ||
    word.toLowerCase() == word ||
    word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase() == word
  );
}

const word = "USA";
console.log(detectCapitalUse(word));
