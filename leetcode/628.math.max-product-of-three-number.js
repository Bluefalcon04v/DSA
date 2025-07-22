/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6

*/

function maxProduct(nums) {
  let [maxA, maxB, maxC] = [-Infinity, -Infinity, -Infinity];
  let [minA, minB] = [Infinity, Infinity];
  for (let n of nums) {
    if (maxA < n) {
      [maxC, maxB, maxA] = [maxB, maxA, n];
    } else if (maxB < n) {
      [maxC, maxB] = [maxB, n];
    } else if (maxC < n) {
      maxC = n;
    }

    if (minA > n) {
      [minB, minA] = [minA, n];
    } else if (minB > n) {
      minB = n;
    }
  }

  return Math.max(maxA * maxB * maxC, minA * minB);
}
console.log(maxProduct( [1, 2, 3]));
console.log(maxProduct([1, 2, -4, 3]));
console.log(maxProduct([-1, -3, 2, -6]));
