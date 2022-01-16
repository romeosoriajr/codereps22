function maxDistToClosest(seats) {
  let prevSeat = -1;
  let result = 0;

  for (let i = 0; i <= seats.length; i++) {
    if (i == seats.length || seats[i] == 1) {
      let distance;

      if (prevSeat == -1 || i == seats.length) {
        distance = i - prevSeat - 1;
      } else {
        distance = Math.floor((i - prevSeat) / 2);
      }
      result = Math.max(result, distance);
      prevSeat = i;
    }
  }

  return result;
}

const seats = [0, 1];

console.log(maxDistToClosest(seats));
