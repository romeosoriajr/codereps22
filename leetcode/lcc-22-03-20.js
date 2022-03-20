function minDominoRotations(tops, bottoms) {
  let result = Number.MAX_SAFE_INTEGER;

  for (let target = 1; target <= 6; target++) {
    let pos = 0;
    let topSwap = 0;
    let bottomSwap = 0;

    while (pos < n) {
      if (tops[pos] !== target && bottoms[pos] == target) {
        topSwap++;
      }

      if (bottoms[pos] !== target && tops[pos] == target) {
        bottomSwap++;
      }

      // if neither hit target, break the while loop;
      if (bottoms[pos] !== target && tops[pos] !== target) {
        break;
      }

      pos++;
    }

    if (pos == n) {
      result = Math.min(result, topSwap, bottomSwap);
    }

    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
  }

  return result;
}
