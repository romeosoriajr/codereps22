function validMountainArray(arr) {
  if (arr.length < 3) return false;
  let peakSeen = false;
  const isAscending = (i) => arr[i - 1] < arr[i] && arr[i] < arr[i + 1];
  const isDescending = (i) => arr[i - 1] > arr[i] && arr[i] > arr[i + 1];
  const isPeak = (i) => {
    if (!peakSeen && arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      peakSeen = true;
      return true;
    }

    return false;
  };

  for (let i = 1; i < arr.length - 1; i++) {
    if (!(isAscending(i) || isDescending(i) || isPeak(i))) {
      return false;
    }
  }

  return peakSeen;
}

const arr1 = [0, 2, 3, 4, 5, 2, 1, 0];
const arr2 = [0, 2, 3, 3, 5, 2, 1, 0];
const arr3 = [2, 1];
const arr4 = [3, 5, 5];
const arr5 = [0, 3, 2, 1];

console.log(validMountainArray(arr1) == true);
console.log(validMountainArray(arr2) == false);
console.log(validMountainArray(arr3) == false);
console.log(validMountainArray(arr4) == false);
console.log(validMountainArray(arr5) == true);
