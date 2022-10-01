function getSkyline(buildings) {
  buildings.sort((a,b) => {
   return a[0]-b[0] 
  })
  console.log(buildings);
}

const buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]];
getSkyline(buildings);
