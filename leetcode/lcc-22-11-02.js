function minMutation(start, end, bank) {
  const set = new Set(bank);

  if (!set.has(end)) return -1;

  const options = new Set();
  options.add('A');
  options.add('C');
  options.add('G');
  options.add('T');

  const visited = new Set();

  let result = 0;

  const queue = [start];
  visited.add(start);

  while (queue.length) {
    let b = queue.length;
    while (b--) {
      const curr = queue.shift();

      if (curr == end) return result;

      const currArr = curr.split('');

      for (let i=0; i < 8; i++) {

        const origChar = currArr[i];
        
        for (const option of options) {

          currArr[i] = option;

          const modified = currArr.join('');

          if (set.has(modified)) {
            if (!visited.has(modified)) {
              queue.push(modified);
              visited.add(modified);
            }
          }
        }

        currArr[i] = origChar;
      }

    }
    result += 1;
  }

  return -1;
}
