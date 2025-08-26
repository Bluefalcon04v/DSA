function minEatingSpeed(piles, h) {
  let len = piles.length;
  let end = -Infinity;
  for (let i = 0; i < len; i++) {
    if (piles[i] > end) {
      end = piles[i];
    }
  }

  let start = 0;
  let result = 0;
  while (start <= end) {
    let totalTime = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i of piles) {
      totalTime += Math.ceil(i / mid);
    }
    if (totalTime <= h) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
