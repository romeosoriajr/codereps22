function partition(s) {
  const result = [];

  helper(0, []);
  return result;

  function helper(start, path) {
    if (start == s.length) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(start, i)) {
        path.push(s.substr(start, i - start + 1));
        helper(i + 1, path);
        path.pop();
      }
    }
  }

  function isPalindrome(start, end) {
    while (start < end) {
      if (s.charAt(start++) !== s.charAt(end--)) return false;
    }

    return true;
  }
}

const s = "aab";
console.log(partition(s));
