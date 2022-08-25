function canConstruct(ransomNote, magazine) {
  const dict = {};

  for (let char of magazine) {
    dict[char] = (dict[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!dict[char]) return false;
    dict[char]--;
  }

  return true;
}


