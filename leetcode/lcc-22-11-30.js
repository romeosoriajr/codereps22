function uniqueOccurrences(arr) {

  const dict = {};

  for (const num of arr) {
    if (!dict[num]) {
      dict[num] = 0;
    }
     dict[num]++;
  }

  const uniques =  new Set(arr)

  const values = new Set(Object.values(dict));

  return values.size == uniques.size;


}
