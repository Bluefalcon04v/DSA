/*
90. Subsets 2
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

*/

// T = O(n 2^n)
// S = O(n) without considering the result array
// S = O(n 2^n) considering the result array

function subsetsWithDups(nums) {
  let result = [];

  function backtracking(path, start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      path.push(nums[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  }

  backtracking([], 0);
  return result;
}

// console.log(subsetsWithDups([1, 2, 2]));
