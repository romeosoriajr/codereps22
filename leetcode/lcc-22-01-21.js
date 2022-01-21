function canCompleteCircuit (gas, cost) {
  let n = gas.length;
  let totalTank = 0;
  let tank = 0;
  let initial = 0;

  for (let i=0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalTank += diff;
    tank += diff;
    if (tank < 0) {
      tank = 0;
      initial = i+1;
    }
  }

  return totalTank < 0 ? -1 : initial;
}

const gas = [1,2,3,4,5];
const cost = [3,4,5,1,2];

console.log(canCompleteCircuit(gas, cost));
