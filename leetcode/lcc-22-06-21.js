function furthestBuilding(heights, bricks, ladders) {
  const queue = [];
  let n = heights.length;

  for (let i = 1; i < n; i++) {
    const diff = heights[i] - heights[i - 1];
    if (diff <= 0) continue;

    add(diff);

    if (queue.length <= ladders) continue;

    bricks -= queue[0];
    if (bricks < 0) return i - 1;

    queue.shift();
  }

  return n - 1;

  function add(diff) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] > diff) {
        queue.splice(i, 0, diff);
        return;
      }
    }
    queue.push(diff);
  }
}

