function sequentialDigits(low, high) {
  const result = [];

  // cant append after 9
  for (let start = 1; start < 9; start++) {
    let num = start;

    let append = start;

    // append must be single digit
    while (num <= high && append <= 9) {
      if (num >= low) {
        result.push(num);
      }

      num = num * 10 + ++append;
    }
  }

  return result.sort((a, b) => a - b);
}

const low = 1000;
const high = 13000;

console.log(sequentialDigits(low, high));
