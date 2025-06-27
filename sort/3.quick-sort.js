/*
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 10, 40, -2]

it should return [-6, -2, 10, 20, 40]
*/
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let rightArr = [];
  let leftArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// console.log(quickSort([6, 5, 7, 8, 2]));

// WORSE CASE O(n^2)
// AVERAGE CASE O(n logn)