/*
Problem: Find the minimum element
*/

function minElement(arr) {
  if (arr.length < 1) return -1;
  let minElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minElem > arr[i]) {
      minElem = arr[i];
    }
  }
  return minElem;
}

// console.log(minElement([2, 4, 2, 9, 5, 10, 1]));
// console.log(minElement([-10, -3, -7, -1]));
// console.log(minElement([3, 7, 1, 8, 2]));
// console.log(minElement([3]));
// console.log(minElement([]));
