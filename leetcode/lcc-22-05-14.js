function networkDelayTime(times, n, k) {
  const tt = new Array(n + 1).fill(Infinity);
  tt[0] = 0;
  tt[k] = 0;

  let flag = true;

  while (flag) {
    flag = false;
    times.forEach(([u, v, w]) => {
      if (tt[u] !== Infinity && tt[v] > tt[u] + w) {
        tt[v] = tt[u] + w;
        flag = true;
      }
    });
  }

  const result = Math.max(...tt);

  return result === Infinity ? -1 : result;
}

