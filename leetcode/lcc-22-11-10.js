function removeDuplicates(s) {
  const stack = [s.charAt(0)];

  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);

    if (char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
}

