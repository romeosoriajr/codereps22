function reconstructQueue(people) {
  people.sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]));

  const result = [];

  for (let person of people) {
    result.splice(person[1], 0, person);
  }

  return result;
}

