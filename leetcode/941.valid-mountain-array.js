/*
941. Valid Mountain Array
Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

*/

var mountainArray = function (nums) {
  let n = nums.length;
  if (n < 3) return false;
  let i = 0;
  while (nums[i] < nums[i + 1] && i <= n) {
    i++;
  }
  if (i === 0 || i === n - 1) return false;

  while (nums[i] > nums[i + 1] && i <= n) {
    i++;
  }

  return i === n - 1;
};

// console.log(mountainArray([3, 5, 5, 8]));
// console.log(mountainArray([0, 3, 2, 1]));
