function isValid(s) {
  const stack = [];
  const pairs = new Map();
  pairs.set(")", "(");
  pairs.set("}", "{");
  pairs.set("]", "[");

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    switch (char) {
      case "(":
      case "{":
      case "[":
        stack.push(char);
        break;
      case ")":
      case "}":
      case "]":
        const top = stack[stack.length - 1];
        if (pairs.get(char) !== top) return false;
        stack.pop();
        break;
    }
  }

  return stack.length == 0;
}
