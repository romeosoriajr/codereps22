function halvesAreAlike(s) {

  const vowels = new Set('aeiouAEIOU'.split(''));
  const n =s.length;
  let count = 0;

  for (let i=0; i < n/2; i++) {
    const leftChar = s.charAt(i);
    const rightChar = s.charAt(n-i-1);

    if (vowels.has(leftChar)){
      count++;
    }
    if (vowels.has(rightChar)) {
      count--;
    }
  }

  return count == 0;
}

console.log(halvesAreAlike('textbook'));
