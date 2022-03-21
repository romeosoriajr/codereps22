function partitionLabels(s) {

  const intervals = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (!intervals.has(char)) {
      intervals.set(char, [i, i]); // [start, end]
    } else {
      const interval = intervals.get(char);
      interval[1] = i; //update the last appearance;
    }
  }

  const indices = [...intervals.values()];
  const result = [];
  let prev = [...indices[0]];

  for (let i = 1; i < indices.length; i++) {
    const curr = indices[i];

    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    if (prevStart <= currStart && currStart <= prevEnd) {
      const newStart = Math.min(prevStart, currStart);
      const newEnd = Math.max(prevEnd, currEnd);
      prev = [newStart, newEnd];
    } else {
      result.push(prev);
      prev = [...indices[i]];
    }
  }

  result.push(prev);

  return result.map((interval) => {
    const [start, end] = interval;

    return end - start + 1;
  });
}

//const s = "eccbbbbdec";
const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));
