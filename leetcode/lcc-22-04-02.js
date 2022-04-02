function validPalindrome (s) {

  let start = 0;
  let end = s.length-1;

  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return isValid(start, end-1) || isValid(start+1, end);
    }

    start++;
    end--;
  }

  return true;

  function isValid(start, end) {

    while (start < end) {
      if (s.charAt(start++) !== s.charAt(end--)) return false;
    }

    return true;

  }

}
