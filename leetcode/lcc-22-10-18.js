function countAndSay(n) {
  if (n <= 0) return "-1";
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = helper(result);
  }

  return result;

  function helper(result) {
    let str = "";
    let p = 0;

    while (p < result.length) {
      const char = result.charAt(p);
      let count = 0;

      while (p < result.length && result.charAt(p) == char) {
        p++;
        count++;
      }

      str = str + `${count}`;
      str = str + char;
    }

    return str;
  }
}

