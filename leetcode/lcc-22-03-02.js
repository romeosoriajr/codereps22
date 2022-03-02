function isSubsequence(s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    const mainChar = t.charAt(j);

    if (mainChar == s.charAt(i)) {
      i++;
      if (i == s.length) return true;
    }
  }

  return i == s.length;
}



console.log(isSubsequence("", "asdf"))
