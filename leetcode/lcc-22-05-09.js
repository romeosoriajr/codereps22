function letterCombinations(digits) {
  if (!digits.length) return [];
  const map = new Map();

  map.set(2, ["a", "b", "c"]);
  map.set(3, ["d", "e", "f"]);
  map.set(4, ["g", "h", "i"]);
  map.set(5, ["j", "k", "l"]);
  map.set(6, ["m", "n", "o"]);
  map.set(7, ["p", "q", "r", "s"]);
  map.set(8, ["t", "u", "v"]);
  map.set(9, ["w", "x", "y", "z"]);

  const result = [];

  helper("", 0);

  return result;

  function helper(currString, currIndex) {
    if (currIndex == digits.length) {
      result.push(currString);
      return;
    }

    const num = digits.charAt(currIndex);

    const letters = map.get(Number(num));

    for (let letter of letters) {
      helper(currString + letter, currIndex + 1);
    }
  }
}

console.log(letterCombinations("23"));
