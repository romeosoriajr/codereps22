function findMaximumXOR(nums) {
  const root = {};
  let result = 0;

  nums.forEach((num) => {
    let xor = 0;
    let curr = root;
    let alt = root;

    for (let i = 31; i >= 0; i--) {
      let p = 0 < (num & (1 << i)) ? 1 : 0;
      let q = p ^ 1;

      curr = curr[p] = curr[p] || {};
      if (alt[q]) {
        alt = alt[q];
        xor ^= 1 << i;
      } else {
        alt = alt[p];
      }
    }

    result = Math.max(result, xor);
  });

  return result;
}

console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));
