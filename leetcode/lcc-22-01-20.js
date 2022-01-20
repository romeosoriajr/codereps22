function minEatingSpeed(piles, h) {
  let max = Math.max(...piles);
  let min = 1;
  let result = max;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    const pace = getPace(mid);

    if (pace <= h) {
      result = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return result;

  function getPace(speed) {
    return piles.reduce((result, p) => (result += Math.ceil(p / speed)), 0);
  }
}

const piles = [3, 6, 7, 11];
const h = 8;

console.log(minEatingSpeed(piles, h));
