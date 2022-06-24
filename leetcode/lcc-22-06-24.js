function isPossible(target) {
  let queue = new MaxPriorityQueue({ priority: (x) => x });
  let sum = target.reduce((x, y) => {
    queue.enqueue(y);
    return x + y;
  }, 0);
  while (true) {
    let cur = queue.dequeue().element;
    sum -= cur;
    if (cur == 1 || sum == 1) return 1;
    if (cur < sum || sum == 0 || cur % sum == 0) return 0;
    cur %= sum;
    sum += cur;
    queue.enqueue(cur);
  }
}


