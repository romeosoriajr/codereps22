function removeDuplicateLetters(s) {
  const lastIndex = new Array(26).fill(null);

  for (let i = 0; i < s.length; i++) {
    lastIndex[s.charCodeAt(i) - 97] = i;
  }

  const seen = new Array(26).fill(false);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currCode = s.charCodeAt(i) - 97;
    if (seen[currCode]) continue;

    while (
      stack.length &&
      stack[stack.length - 1] > currCode &&
      i < lastIndex[stack[stack.length - 1]]
    ) {
      seen[stack.pop()] = false;
    }

    stack.push(currCode);
    seen[currCode] = true;
  }

  let result = "";

  while (stack.length) {
    const char = String.fromCharCode(97 + stack.pop());
    result = `${char}${result}`
  }

  return result;
}

const s = "bcabc";
console.log(removeDuplicateLetters(s))
