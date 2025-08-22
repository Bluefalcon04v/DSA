function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSorted = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 2, 3, 8]));
