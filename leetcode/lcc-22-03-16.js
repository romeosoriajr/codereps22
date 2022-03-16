function validateStackSequences(pushed, popped) {
  const stack = [];
  let poppedIndex = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length && stack[stack.length - 1] == popped[poppedIndex]) {
      stack.pop();
      poppedIndex++;
    }
  }

  return !stack.length;
}

const pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];
