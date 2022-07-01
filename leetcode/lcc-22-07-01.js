function maximumUnits(boxTypes, truckSize) {

  boxTypes.sort((a,b) => b[1] - a[1])

  let result = 0;

  for (let [numberOfBoxes, units] in boxTypes) {
    const numBoxes = Math.min(truckSize, numberOfBoxes);
    result += numBoxes * units;
    truckSize -= numBoxes;
  }

  return result;

}


