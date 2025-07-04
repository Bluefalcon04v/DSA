/*
Check if an Array is Sorted
Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.


Example 2:
Input: N = 5, array[] = {5,4,6,7,8}
Output: False.
Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.

*/

function arrayIsSorted(arr) {
  sortedArr(arr, 0, arr.length - 1);
}

function sortedArr(arr, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (start > end) return -1;
  if (arr[mid] < arr[mid + 1] && arr[mid - 1] > arr[mid]) return mid;
  if (arr[mid] > arr[mid + 1]) return sortedArr(arr, mid + 1, end);
  else {
    return sortedArr(arr, start, mid - 1);
  }
}

console.log(arrayIsSorted([3, 4, 5, 1, 2]));
// console.log(arrayIsSorted([2, 1, 3, 4]));
// console.log(arrayIsSorted([1, 2, 3]));
