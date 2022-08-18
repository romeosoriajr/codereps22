function minSetSize(arr) {
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = (dict[arr[i]] || 0) + 1;
  }

  const frequencies = Object.values(dict);

  frequencies.sort((a, b) => a - b);

  let result = 0;
  let removed = 0;

  let i = frequencies.length - 1;

  while (removed < arr.length / 2) {
    result++;
    removed += frequencies[i--];
  }

  return result;
};
