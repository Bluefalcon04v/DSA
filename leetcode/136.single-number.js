/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1


Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

*/

//? Method 1 Using Hash Table
//? Time Complexity O(n)
//? Space Complexity O(n/2)
// function isSingleNumber(nums) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] == 1) return nums[i];
//   }
// }

//? Method 2 Using XOR
//? Time Complexity O(n)
//? Space Complexity O(1)
function isSingleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

// console.log(isSingleNumber([2, 2, 1]));
// console.log(isSingleNumber([4, 1, 2, 1, 2]));
// console.log(isSingleNumber([1]));
