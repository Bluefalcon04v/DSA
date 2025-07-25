/*
Check if an Array is Sorted Forward, Backward or Not at All

Input: [5, 4, 3, 6, 7]
Expected: "not sorted"

Input: [1, 2, 3, 2, 1]
Expected: "not sorted"

Input: [1, 3, 2]
Expected: "not sorted"

Input: [5, 5, 3, 2, 1]
Expected: "sorted (descending)"

Input: [1, 2, 2, 3, 4]
Expected: "sorted (ascending)"

Input: [9, 2]
Expected: "sorted (descending)"


Input: [3, 5]
Expected: "sorted (ascending)"

Input: [7]
Expected: "sorted (ascending)" or "trivially sorted"

Input: []
Expected: "sorted (ascending)" or "trivially sorted"
*/

function sortedArr(arr) {
  if (arr.length <= 1) return "not sorted";

  let isAsc = true;
  let isDesc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) isAsc = false;
    if (arr[i] < arr[i + 1]) isDesc = false;
  }

  if (isAsc) return "sorted ascending";
  if (isDesc) return "sorted descending";
  return "not sorted";
}

// console.log(sortedArr([5, 4, 3, 6, 7]));
// console.log(sortedArr([1, 2, 3, 2, 1]));
// console.log(sortedArr([1, 3, 2]));
// console.log(sortedArr([5, 5, 3, 2, 1]));
// console.log(sortedArr([1, 2, 2, 3, 4]));
// console.log(sortedArr([9, 2]));
// console.log(sortedArr([3, 5]));
// console.log(sortedArr([7]));
// console.log(sortedArr([]));
