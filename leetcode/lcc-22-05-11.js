function countVowelStrings(n) {
  let a = 1;
  let e = 1;
  let i = 1;
  let o = 1;
  let u = 1;

  while (--n) {
    o += u;
    i += o;
    e += i;
    a += e;
  }

  return a + e + i + o + u;
};
