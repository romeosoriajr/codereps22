function removeCoveredIntervals(intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  let i = 1;

  while (i < intervals.length) {
    if (isCovered(i, i - 1)) {
      intervals.splice(i - 1, 1);
    } else if (isCovered(i - 1, i)) {
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  return intervals.length;

  function isCovered(i, j) {
    const a = intervals[i];
    const b = intervals[j];

    return b[0] >= a[0] && b[1] <= a[1];
  }
}

const intervals = [
  [1, 4],
  [3, 6],
  [2, 8],
];
console.log(removeCoveredIntervals(intervals));
