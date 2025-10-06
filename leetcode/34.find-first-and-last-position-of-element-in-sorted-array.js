/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

function searchRange(nums, target) {
  if (nums.length < 1) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      let i = m;
      let j = m;
      while (nums[i] == target) {
        i--;
      }
      while (nums[j] == target) {
        j++;
      }
      return [i + 1, j - 1];
    }
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return [-1, -1];
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 1));
