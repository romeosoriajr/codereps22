function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    if (i >= 0) carry += a.charAt(i--) - "0";
    if (j >= 0) carry += b.charAt(j--) - "0";

    result += carry % 2;

    carry = Math.floor(carry / 2);
  }

  return result.split("").reverse().join("");
}

const a = "1010";
const b = "1011";

console.log(addBinary(a, b));
