function bitwiseComplement(n) {
  let bitNum = n;
  let steps = 0;
  let result = 0;

  do {
    let bit = bitNum & 1;

    if (!bit) {
      const val = 2 ** steps;
      result += val;
    }

    bitNum = bitNum >> 1;
    steps++;
  } while (bitNum);

  return result;
}

console.log("result is", bitwiseComplement(0));
console.log("result is", bitwiseComplement(10));
