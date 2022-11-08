function makeGood(s) {

  for (let i=0; i < s.length-1; i++) {
    if (s.charAt(i) !== s.charAt(i+1)) {

      if (s.charAt(i).toUpperCase() == s.charAt(i+1) || s.charAt(i).toLowerCase() == s.charAt(i+1)) {
        return makeGood(s.slice(0, i) + s.slice(i+2))
      }
    }
  }

  return s;
}

