function lastStoneWeight(stones) {

  while (stones.length >= 2) {
    stones.sort((a,b) => a-b)

    const heavyA = stones.pop();
    const heavyB = stones.pop();

    const diff = heavyA - heavyB;

    if (diff) stones.push(diff);
  }

  return stones.length ? stones.pop() : 0;
}

const stones = [2,7,4,1,8,1];

console.log(lastStoneWeight(stones));
