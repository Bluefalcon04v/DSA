/*
852. Peak Index in a Mountain Array

You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
Return the index of the peak element.
Your task is to solve it in O(log(n)) time complexity.

Example 1:
Input: arr = [0,1,0]
Output: 1

Example 2:
Input: arr = [0,2,1,0]
Output: 1

Example 3:
Input: arr = [0,10,5,2]
Output: 1

*/

function peakIndexInMountainArray(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m - 1] < arr[m] && arr[m] > arr[m + 1]) {
      return m;
    }
    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    }
    if (arr[m] > arr[m + 1]) {
      r = m - 1;
    }
  }
}

// console.log(peakIndexInMountainArray([3, 4, 5, 1]));
// console.log(peakIndexInMountainArray([0, 1, 4, 2, 1]));
