function compareVersion(version1, version2) {
  const vA = version1.split(".").map((s) => parseInt(s, 10));
  const vB = version2.split(".").map((s) => parseInt(s, 10));


  //pad smaller array with zeroes
  if (vA.length !== vB.length) {
    const count = Math.abs(vA.length - vB.length);

    if (vA.length < vB.length) {
      padArrWithZeroes(vA, count);
    } else {
      padArrWithZeroes(vB, count);
    }
  }

  for (let i = 0; i < vA.length; i++) {
    if (vA[i] == vB[i]) continue;

    return vA[i] < vB[i] ? -1 : 1;
  }

  return 0;

  function padArrWithZeroes(arr, count) {
    for (let i = 0; i < count; i++) arr.push(0);
  }
}

const version1 = "1.01", version2 = "1.001"
console.log(compareVersion(version1, version2));
