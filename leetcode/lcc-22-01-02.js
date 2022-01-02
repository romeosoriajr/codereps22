function numPairsDivisibleBy60(time) {

  const maxTime =Math.ceil(500/60)*60;

  const complements = new Array(60).fill(0);
  let result = 0;

  for (let t of time) {
    const mod = (maxTime - t) % 60;

    result += complements[mod];
    complements[t % 60] += 1;
  }

  return result;
}



