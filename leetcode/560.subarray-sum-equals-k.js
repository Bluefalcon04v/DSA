/*
560. Subarray Sum Equals K
Medium
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

function subarraySumEqual(nums, k) {
  let totalOcc = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        totalOcc++;
      }
    }
    sum = 0;
  }

  return totalOcc;
}

// console.log(subarraySumEqual([1, 1, 1], 2));
// console.log(subarraySumEqual([1, 2, 3], 3));
// console.log(subarraySumEqual([1, 2, 1, 2, 1], 3));
// console.log(subarraySumEqual([1, -1, 0], 0));
