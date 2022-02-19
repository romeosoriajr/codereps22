function removeKdigits(num, k) {
  const stack = [];

  stack.push(num.charAt(0));

  for (let i = 1; i < num.length; i++) {
    const numChar = num.charAt(i);

    while (k && stack.length && stack[stack.length - 1] > numChar) {
      stack.pop();
      k--;
    }
    stack.push(numChar);

    if (stack.length == 1 && numChar == "0") {
      stack.pop();
    }
  }

  while (stack.length && k--) {
    stack.pop();
  }

  return stack.length ? stack.join("") : "0";
}

