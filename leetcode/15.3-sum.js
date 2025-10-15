/*
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

function threeSum(nums) {
  nums.sort((a, b) => a - b); // sorting ascending order
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      twoSum(nums, i, ans);
    }
  }
  return ans;
}

function twoSum(nums, x, ans) {
  let i = x + 1;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j] + nums[x];
    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([nums[i], nums[j], nums[x]]);
      i++;
      j--;
      while (i < j && nums[i] == nums[i - 1]) {
        i++;
      }
    }
  }
}

// console.log(
//   threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
// ); //[[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
