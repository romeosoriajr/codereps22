function myAtoi(s) {
  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1;

  let num = 0;
  let notANum = true;
  let polarity = 1;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (notANum) {
      if (char == " ") {
        continue;
      } else if (char == "-") {
        polarity = -1;
      } else if (/\d/.test(char)) {
        num = parseInt(char);
      } else if (char !== "+") return 0;
      notANum = false;
    } else {
      if (/\d/.test(char)) {
        num = num * 10 + parseInt(char);

        if (num * polarity > MAX) return MAX;
        if (num * polarity < MIN) return MIN;
      } else {
        break;
      }
    }
  }

  return polarity * num;
}

console.log(myAtoi("   -42"));
