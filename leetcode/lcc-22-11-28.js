function findWinners(matches) {

  const winners = new Set();
  const losers = new Set();
  const lostOnce = new Set();

  for (let [winner, loser] of matches) {

    if (lostOnce.has(loser)) {
      lostOnce.delete(loser);
    }

    if (!losers.has(loser)) {
      losers.add(loser);
      lostOnce.add(loser);
    }


    if (winners.has(loser)) {
      winners.delete(loser);
    }

    if (!losers.has(winner)) {
      winners.add(winner);
    }

  }

  return [Array.from(winners).sort((a,b) => a-b),
  Array.from(lostOnce).sort((a,b) => a-b)];

}

