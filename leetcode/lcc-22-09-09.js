function numberOfWeakCharacters(properties) {
  properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let result = 0;
  let max = 0;
  for (let [_, d] of properties) d < max ? result++ : (max = d);
  return result;
}

