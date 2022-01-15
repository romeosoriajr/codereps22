function minJumps(arr) {

  const n = arr.length;
  if (n == 1) return 0;

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const val = arr[i];
    if (!map.has(val)) map.set(val, []);
    map.get(val).push(i);
  }

  let step = 0;
  const queue = [];
  queue.push(0);

  while (queue.length) {
    step += 1;

    const breadth = queue.length;

    // put the available moves in the queue
    for (let i = 0; i < breadth; i++) {
      const j = queue.shift();


      // can we move backward
      if (j - 1 >= 0 && map.has(arr[j - 1])) {
        queue.push(j - 1);
      }

      // can we move forward
      if (j + 1 < n && map.has(arr[j + 1])) {
        if (j+1 == n-1) return step;
        queue.push(j + 1);
      }

      // can we jump to an index that has the same value;
      if (map.has(arr[j])) {
        const indices = map.get(arr[j]);

        for (let k = 0; k < indices.length; k++) {
          if (indices[k] !== j) {
            if (indices[k] == n - 1) return step;

            queue.push(indices[k]);
          }
        }
      }

      map.delete(arr[j]);
    }
  }

  return step;
}

const arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];

console.log(minJumps(arr));
