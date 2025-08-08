/*
287. Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3

*/

//? Method 1 using hash Map
function isDuplicateNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] != 1) {
      return nums[i];
    }
  }
}

// console.log(isDuplicateNumber([1, 3, 4, 2, 2]));
// console.log(isDuplicateNumber([1, 3, 1, 3, 2]));
// console.log(isDuplicateNumber([3, 3, 3, 3, 3]));
