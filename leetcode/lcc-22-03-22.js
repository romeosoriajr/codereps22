function getSmallestString(n, k) {
  const result = new Array(n).fill("a");

  k -= n;

  while (k > 0) {
    --n;
    result[n] = String.fromCharCode(
      result[n].charCodeAt(result[n]) + Math.min(25, k)
    );
    k -= Math.min(25, k);
  }

  return result.join("");
}

console.log(getSmallestString(3, 27));
