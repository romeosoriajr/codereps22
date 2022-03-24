function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length-1;
  let count = 0;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      ++i;
      --j;
    } else {
      --j;
    }

    count += 1;
  }

  return count;
}

const people = [3, 2, 2, 1];
const limit = 3;
console.log(numRescueBoats(people, limit));
