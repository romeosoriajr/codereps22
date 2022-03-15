function minRemoveToMakeValid(s) {
  const arr = s.split("");
  const stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      stack.push(i);
    } else if (arr[i] == ")") {
      if (!stack.length) {
        arr[i] = "*";
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length) {
    arr[stack[stack.length - 1]] = "*";
    stack.pop();
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "*") result.push(arr[i]);
  }

  return result.join("");
}
