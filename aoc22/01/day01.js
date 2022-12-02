const fs = require('fs');

try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
  const arr = data.split('\n');

  const sum = arr.reduce((arr, curr) => {

    if (curr == '') {
      arr.push(0);
    } else {
      arr[arr.length-1] = arr[arr.length-1] + parseInt(curr);
    }

    return arr;
  }, [0]).sort((a,b) => a-b);


  let result = 0;
  for (let i=0; i < 3; i++) {
    result += sum.pop();
  }
  
  console.log(result);


} catch (err) {
  console.error(err);
}

