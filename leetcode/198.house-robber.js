/*
198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

// Iterative Approach
var rob = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  let dp = [arr[0], Math.max(arr[0], arr[1])];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }
  return dp[n - 1];
};

// Recursive Approach
var rob = function (arr) {
  let store = {};
  let n = arr.length - 1;

  function dp(n) {
    if (n < 1) return arr[0];
    if (n == 1) return Math.max(arr[0], arr[1]);
    if (!store[n]) {
      store[n] = Math.max(dp(n - 1), dp(n - 2) + arr[n]);
    }
    return store[n];
  }

  return dp(n);
};
