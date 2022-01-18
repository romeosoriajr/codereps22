function canPlaceFlowers(flowerbed, n) {
  const isPrevOpen = (i) => i - 1 < 0 || flowerbed[i - 1] == 0;
  const isNextOpen = (i) => i + 1 == flowerbed.length || flowerbed[i + 1] == 0;

  for (let i = 0; n > 0 && i < flowerbed.length; i++) {
    if (flowerbed[i] == 0 && isPrevOpen(i) && isNextOpen(i)) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n == 0;
}

const flowerbed = [0];

console.log(canPlaceFlowers(flowerbed, 1));
