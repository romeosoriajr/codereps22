function hasAllCodes (s, k) {
  
  const set = new Set();

  for (let i=0; i < s.length-k+1; i++) {
    const sub = s.substr(i, k);
    set.add(sub);
  }

  return set.size == 2**k;
}

const s = "0110";
const k = 2;

console.log(hasAllCodes(s, k));
