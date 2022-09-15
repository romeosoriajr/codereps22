function findOriginalArray(changed) {
  const n = changed.length;

  if (n % 2) return [];

  changed.sort((a, b) => a - b);

  const result = [];

  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(changed[i], (map.get(changed[i]) || 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    if (map.get(changed[i]) == 0) continue;
    if (!map.has(changed[i]*2) || map.get(changed[i]*2) == 0) return [];

    result.push(changed[i]);
    map.set(changed[i], map.get(changed[i]) - 1);
    map.set(changed[i] * 2, map.get(changed[i] * 2) - 1);
  }

  return result;
}

