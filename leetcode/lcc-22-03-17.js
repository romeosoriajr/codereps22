function scoreOfParentheses(s) {
  const stack = [];

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char == "(") {
      stack.push(result);
      result = 0;
    } else {
      result = Math.max(1, 2 * score) + stack.pop();
    }
  }

  return result;
};
