/*
152. Maximum Product Subarray
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
Note that the product of an array with a single element is the value of that element.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

var maxProduct = function (nums) {
  let maxProd = (minProd = res = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let tempMax = maxProd * nums[i];
    let tempMin = minProd * nums[i];
    maxProd = Math.max(tempMax, nums[i], tempMin);
    minProd = Math.min(tempMax, nums[i], tempMin);
    res = Math.max(maxProd, minProd, res);
  }
  return res;
};
// Approach 2

// console.log(maxProduct([2, -5, 3, 1, -4, 0, -10, 2, 8])); // 120
// console.log(maxProduct([-4, -3, -2])); // 12
