function backspaceCompare(s, t) {
  const sResult = [];
  const tResult = [];

  for (let char of s) {
    if (char == "#") {
      sResult.pop();
    } else {
      sResult.push(char);
    }
  }

  for (let char of t) {
    if (char == "#") {
      tResult.pop();
    } else {
      tResult.push(char);
    }
  }

  return sResult.join("") == tResult.join("");
}
