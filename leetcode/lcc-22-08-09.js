function numFactoredBinaryTrees(arr) {
  const mod = 10 ** 9 + 7;
  const map = new Map();
  let count = 1;

  arr.sort((a, b) => a - b);

  map.set(arr[0], count);

  for (let num of arr) {
    count = 1;

    for (const key of map.keys()) {
      if (num % key == 0 && map.has(num / key)) {
        count += map.get(key) * map.get(num / key);
      }
    }

    map.set(num, count);
  }

  let sum = 0;
  for (const key of map.keys()) {
    sum = (sum + map.get(key)) % mod;
  }

  return sum;
}

