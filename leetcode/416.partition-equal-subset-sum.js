/*
416. Partition Equal Subset Sum
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

*/

// storing data using the object
var canPartition = function (nums) {
  let max = 0;
  if (max % 2) return false;
  for (let i = 0; i < nums.length; i++) {
    max += nums[i] / 2;
  }
  let store = {};
  let fn = (start, rem) => {
    if (rem == 0) return true;
    if (rem < 0) return false;
    let key = start + "-" + rem;
    if (key in store) return store[key];
    for (let i = start; i < nums.length; i++) {
      if (fn(i + 1, rem - nums[i])) {
        return (store[key] = true);
      }
    }
    return (store[key] = false);
  };
  return fn(0, max);
};

// using 2D array
var canPartition = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max += nums[i];
  }
  if (max % 2) return false;
  max = max / 2;
  let store = Array.from({ length: max + 1 }, () =>
    Array(nums.length).fill(undefined)
  );
  let fn = (rem, start) => {
    if (rem === 0) return true;
    if (rem < 0) return false;
    if (store[rem][start] != undefined) return store[rem][start];
    for (let i = start; i < nums.length; i++) {
      if (fn(rem - nums[i], i + 1)) {
        return (store[rem][start] = true);
      }
    }
    return (store[rem][start] = false);
  };

  return fn(max, 0);
};
