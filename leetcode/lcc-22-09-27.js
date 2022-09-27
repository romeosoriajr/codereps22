function pushDominoes(s) {
  let n = s.length;
  const sArr = s.split("");
  let r = -1;

  for (let i = 0; i < n; i++) {
    if (sArr[i] == "L") {
      if (r == -1) {
        for (let j = i - 1; j >= 0 && sArr[j] == "."; --j) {
          sArr[j] = "L";
        }
      } else {
        for (let j = r + 1, k = i - 1; j < k; ++j, --k) {
          sArr[j] = "R";
          sArr[k] = "L";
        }

        r = -1;
      }
    } else if (sArr[i] == "R") {
      if (r != -1) {
        for (let j = r + 1; j < i; ++j) sArr[j] = "R";
      }

      r = i;
    }
  }

  if (r != -1) {
    for (let j = r + 1; j < n; ++j) sArr[j] = "R";
  }

  return sArr.join("");
}

