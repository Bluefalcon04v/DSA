/*
189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

function rotateArray(nums, k) {
  k = k % nums.length;
  reverseAnArray(nums, 0, nums.length - 1);
  reverseAnArray(nums, 0, k - 1);
  return reverseAnArray(nums, k, nums.length - 1);
}

function reverseAnArray(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
}

// console.log(rotateArray([1, 2, 3, 4, 5], 8));
// console.log(rotateArray([-1, -100, 3, 99], 2));
// console.log(rotateArray([1, 2], 3));
