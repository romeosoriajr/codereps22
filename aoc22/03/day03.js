const fs = require('fs');

try {
  const data = fs.readFileSync('./input.txt', 'utf-8');

  const arr = data.split('\n');

  let sum = 0;

  //part1
  // for (let x=0; x < arr.length; x++) {
  //   const rucksack = arr[x];

  //   if (!rucksack) continue;

  //   const n = rucksack.length;

  //   const firstComp = new Set();
  //   const secondComp = new Set();


  //   for (let i=0; i < n/2; i++) {
  //     const firstChar = rucksack.charAt(i);
  //     const secondChar = rucksack.charAt(n-1-i);

  //     firstComp.add(firstChar);
  //     secondComp.add(secondChar);
  //   }

  //   for (const char of firstComp) {
  //     if (secondComp.has(char)) {
  //       sum += getCharValue(char);
  //     }
  //   }

  // }

  for (let i=0; i < arr.length; i += 3) {

    const shared = new Set(arr[i].split(''));

    const second = arr[i+1];
    const third = arr[i+2];
    for (const char of shared) {
      if (second.indexOf(char) != -1 && third.indexOf(char) != -1) {
        console.log(second.indexOf(char));
        sum += getCharValue(char)
        break;
      }
    }

  }
  console.log(sum);


} catch (error) {
  console.log(error);
}

function getCharValue(char) {

  if (char == char.toLowerCase()) {
    return char.charCodeAt(0) - 96;
  } else {
    return char.charCodeAt(0) - 38;
  }
}
