function longestValidParentheses(s) {
  let result = 0;
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        result = Math.max(result, i - stack[stack.length - 1]);
      }
    }
  }

  return result;
}


