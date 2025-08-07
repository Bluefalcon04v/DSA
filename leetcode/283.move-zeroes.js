/*
283. Moves Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. 

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

*/

//? Method 1 By switching the position  with non zeroes
// function moveZeroes(nums) {
//   let p1 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[p1], nums[i]] = [nums[i], nums[p1]]; //we are switching the position in this
//       p1++;
//     }
//   }
//   return nums;
// }

//? Method 2 without switching the position

function moveZeroes(nums) {
  let p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      p1++;
    }
  }
  for (let i = p1; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));
