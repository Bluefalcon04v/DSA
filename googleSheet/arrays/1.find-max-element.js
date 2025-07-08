/*
Problem: Find the maximum element in an array 
*/

function maxElement(arr) {
  if (arr.length < 1) return -1;
  let maxElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
  }
  return maxElem;
}

// console.log(maxElement([2, 4, 2, 9, 5, 10, 1]));
// console.log(maxElement([-10, -3, -7, -1]));
// console.log(maxElement([3, 7, 1, 8, 2]));
// console.log(maxElement([3]));
// console.log(maxElement([]));
