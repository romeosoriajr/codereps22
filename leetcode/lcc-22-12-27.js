function maximumBags(capacity, rocks, additionalRocks) {
  const n = rocks.length;

  let count = 0;

  for (let i=0; i < n; i++) {
    rocks[i] = capacity[i] - rocks[i];
  }

  rocks.sort((a, b) => a-b);

  for (let i=0; i < n && (rocks[i] - additionalRocks) <= 0; i++) {
    count++;
    additionalRocks -= rocks[i];
  }

  return count;
}

const capacity = [2,3,4,5];
const rocks = [1,2,4,4];

console.log(maximumBags(capacity, rocks, 2));
