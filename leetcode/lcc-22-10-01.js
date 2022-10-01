function numDecodings(s) {
  const n = s.length;
  const count = new Array(n + 1);

  count[0] = 1;
  count[1] = 1;

  if (s.charAt(0) == "0") return 0;

  for (let i = 2; i <= n; i++) {
    count[i] = 0;

    const secondDigit = parseInt(s.charAt(i - 1));
    const firstDigit = parseInt(s.charAt(i - 2));

    if (secondDigit) count[i] = count[i - 1];

    if (firstDigit == 1 || (firstDigit == 2 && secondDigit > 7))
      count[i] += count[i - 2];
  }

  return count[n];
}

