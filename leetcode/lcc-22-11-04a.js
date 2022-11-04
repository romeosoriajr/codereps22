function reverseVowels(s) {
  const arr = s.split("");
  const vowels = new Set("aeiouAEIOU".split(""));
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (vowels.has(arr[i]) && vowels.has(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    if (!vowels.has(arr[i])) {
      i++;
    }

    if (!vowels.has(arr[j])) {
      j--;
    }
  }

  return arr.join("");
}

