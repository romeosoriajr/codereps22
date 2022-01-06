function carPooling(trips, capacity) {
  const travel = new Map();
  for (let [passengers, start, end] of trips) {
    for (let i = start; i < end; i++) {
      const updatedCapacity = (travel.get(i) || 0) + passengers;

      if (updatedCapacity > capacity) return false;

      travel.set(i, updatedCapacity);
    }
  }

  return true;
}

const trips = [[2,1,5],[3,5,7]]
const capacity = 3
console.log(carPooling(trips, capacity));
