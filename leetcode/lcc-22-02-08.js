function addDigits(num) {
  let curr = num;
  while (curr > 9) curr = getSum(curr);

  return curr;

  function getSum(num) {
    let result = 0;
    while (num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
    }

    return result;
  }
}

const num = 38;
console.log(addDigits(num));
