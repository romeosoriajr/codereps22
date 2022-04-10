function calPoints (ops) {
  const stack = [];

  for (let op of ops) {
    switch(op) {
      case "C":
        stack.pop();
        break;
      case "D":
        const multiplied = stack[stack.length-1]*2;
        stack.push(multiplied);
        break;
      case "+":
        const sum = stack[stack.length-1] + stack[stack.length-2];
        stack.push(sum);
        break;
      default:
        stack.push(parseInt(op))
        break;
    }
  }

  return stack.reduce((total, num) => total+num)
}

const ops = ["5","2","C","D","+"];
console.log(calPoints(ops))
