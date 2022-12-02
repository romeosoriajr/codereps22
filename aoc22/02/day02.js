const fs = require('fs');

try {
  const data = fs.readFileSync('./input.txt', 'utf8');
  const arr = data.split('\n');


  const map = new Map();
  // map.set('A', 'rock');
  // map.set('B', 'paper');
  // map.set('C', 'scissors');

  // map.set('X', ['scissors', 'paper', 1]);
  // map.set('Y', ['rock', 'scissors', 2]);
  // map.set('Z', ['paper', 'rock', 3]);

  map.set('A', ['scissors', 'paper', 'rock']);
  map.set('B', ['rock', 'scissors', 'paper']);
  map.set('C', ['paper', 'rock', 'scissors']);

  map.set('scissors', 3);
  map.set('rock', 1);
  map.set('paper', 2);
  let result = 0;

  for (let str of arr) {
    const [a,b] = str.split(' ');

    if (!a || !b) continue;
    const [loss, won, draw] = map.get(a);

    //lose
    if (b == 'X') {

      const score = map.get(loss);
      result += (0 + score);

    //draw
    } else if (b == 'Y') {
      const score = map.get(draw);
      result += (3 + score);
    //win
    } else {
      const score = map.get(won);
      result += (6 + score);
    }
  }

  // for (let str of arr) {
  //   const [a, b] = str.split(' ');

  //   if (!a || !b) continue;
  //   const opp = map.get(a);
  //   const [won, loss, score] = map.get(b);

  //   if (won == opp) {
  //     result += (score + 6);
  //   } else if (loss == opp) {
  //     result += (score);

  //   } else {
  //     result += (score + 3);
  //   }

  // }

  console.log(result);

} catch(error) {
  console.log(error);
}
